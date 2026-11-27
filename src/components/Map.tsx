import { useRef, useEffect } from 'react'
import * as maplibregl from 'maplibre-gl'
import type { MapMouseEvent, MapGeoJSONFeature, ExpressionSpecification, StyleSpecification } from 'maplibre-gl'
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import { useExcavationStore } from '../excavationStore'
import { toaster } from "@/components/ui/toaster"
import { MdLayersClear } from "react-icons/md" 

import 'maplibre-gl/dist/maplibre-gl.css';

//bundlers need to be told where the MapLibre web worker lives
maplibregl.setWorkerUrl(workerUrl)

//MapTiler satellite imagery as the basemap
const SATELLITE_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    satellite: {
      type: 'raster',
      url: `https://api.maptiler.com/tiles/satellite-v2/tiles.json?key=${import.meta.env.MAPTILE_KEY ?? ''}`,
      tileSize: 512
    }
  },
  layers: [{ id: 'satellite', type: 'raster', source: 'satellite' }]
}

//GeoJSON urls are fetched by the web worker, so they have to be absolute
const dataUrl = (file: string) =>
  new URL(`${import.meta.env.BASE_URL}data/${file}`, window.location.origin).href

const extrudeColor = (hovered: number | null, clicked: number | null): ExpressionSpecification => [
  'case',
  ['==', ['get', 'map_id'], hovered ?? -1], '#7e823d',
  ['==', ['get', 'map_id'], clicked ?? -1], '#7e823d',
  '#d9e16a'
]

const flatOpacity = (hovered: number | null, clicked: number | null): ExpressionSpecification => [
  'case',
  ['==', ['get', 'map_id'], hovered ?? -1], 0.9,
  ['==', ['get', 'map_id'], clicked ?? -1], 0.9,
  0.4
] 

const flatColor = (hovered: number | null, clicked: number | null): ExpressionSpecification => [
  'case',
  ['==', ['get', 'map_id'], hovered ?? -1], '#e4ec6e',
  ['==', ['get', 'map_id'], clicked ?? -1], '#e4ec6e',
  '#f6ff72'
]



//extend bounds with every [lng, lat] found in (possibly nested) polygon coordinates
const extendBounds = (bounds: maplibregl.LngLatBounds, coords: unknown) => {
  if (!Array.isArray(coords)) return
  if (typeof coords[0] === 'number') {
    bounds.extend(coords as [number, number])
    return
  }
  coords.forEach((c) => extendBounds(bounds, c))
}

const Map = () => {

  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]); 


  useEffect(() => {
    if (!mapContainerRef.current) return;

    let unsubscribe: (() => void) | undefined;

    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: SATELLITE_STYLE,
      center: [-2.743166, 51.058039],
      zoom: 18,
      maxPitch: 85, //default is 60, the 3D view pitches to 70
      canvasContextAttributes: { antialias: true }
    });

    //a missing or wrong key, a used up quota or no network. Reported once, not once per tile
    let imageryErrorShown = false
    mapRef.current.on('error', (e) => {
      console.error(e.error)
      if (!('sourceId' in e) || e.sourceId !== 'satellite' || imageryErrorShown) return
      imageryErrorShown = true
      toaster.create({
        description: 'Satellite imagery could not be loaded. The excavation polygons still work.',
        type: 'error',
        closable: true
      })
    })

    mapRef.current.on('load', () => {

      mapRef?.current?.addSource('excavation', {
        type: 'geojson',
        data: dataUrl('excavation.geojson')
      });

      mapRef?.current?.addSource('contexts-extrude', {
        type: 'geojson',
        data: {
          'type': 'FeatureCollection',
          'features': []
        }
      });

      mapRef?.current?.addLayer({
        id: 'excavation',
        type: 'fill',
        source: 'excavation',
        paint: {
          'fill-color': '#3b82f6',
          'fill-opacity': 0.5,
          'fill-outline-color': '#1d4ed8'
        }
      });


      mapRef?.current?.addSource('contexts', {
        type: 'geojson',
        data: dataUrl('contexts.geojson'),
      });

      mapRef?.current?.addLayer({
        id: 'contexts',
        type: 'fill',
        source: 'contexts',
        paint: {
          'fill-color': flatColor(null, null),
          'fill-outline-color': 'black',
          'fill-opacity':flatOpacity(null,null)
        }
      }); 

      mapRef?.current?.addLayer({'id': 'contexts-extrude',
        'type': 'fill-extrusion',
        'source': 'contexts-extrude',
        'paint': {
          'fill-extrusion-color': extrudeColor(null, null), 
          'fill-extrusion-opacity': 0.9,
          'fill-extrusion-vertical-gradient': false,
          'fill-extrusion-height': ['+',['to-number', ['get', 'customTop']] , ['to-number', ['get', 'customHeight']]],
          'fill-extrusion-base':  ['+',['to-number', ['get', 'customTop']], ['to-number', ['get', 'customBase']]]
        }
      });

      mapRef.current?.on('mousemove', 'contexts', (e) => {
        e.target.getCanvas().style.cursor = 'crosshair'
      })

      mapRef.current?.on('mouseleave', 'contexts', (e) => {
        e.target.getCanvas().style.cursor = ''
      })

      mapRef.current?.on('mousemove', 'contexts-extrude', (e) => {
        e.target.getCanvas().style.cursor = 'pointer'
      })

      mapRef.current?.on('mouseleave', 'contexts-extrude', (e) => {
        e.target.getCanvas().style.cursor = ''
      })

      mapRef?.current?.on('click', (e:MapMouseEvent) => {


        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];

        const point = e.point;
        let markCoordinates = e.lngLat;
        let myMarker = new maplibregl.Marker({"color": 'red'});


        //only query our own layers, otherwise basemap features are returned too
        const features:MapGeoJSONFeature[] | undefined = mapRef?.current?.queryRenderedFeatures(point, {
          layers: ['excavation', 'contexts', 'contexts-extrude']
        });
        if (features?.length === 0) {
          return
        }

        let contextFeatures:MapGeoJSONFeature[] | undefined = features?.filter(e => e?.layer?.id == 'contexts');

        let contextExtrudeFeatures:MapGeoJSONFeature[] | undefined = features?.filter(e => e?.layer?.id == 'contexts-extrude');

        if (useExcavationStore.getState().extrude && (contextExtrudeFeatures?.length ?? 0) > 0 && (features?.length ?? 0) > 0)  {
          console.log('GIVING DATA');
          return;

        }

        if (useExcavationStore.getState().extrude )  {
          return;

        }


        if (contextFeatures?.length === 0) {
          useExcavationStore.getState().setContextsFound([]);
          return
        }

        myMarker.setLngLat(markCoordinates).addTo(e.target);
        markersRef.current.push(myMarker);
        useExcavationStore.getState().setCoordsClicked({x:point.x, y:point.y});

        const featuresFound = (contextFeatures ?? []).map((feature) => ({
          map_id: feature.properties?.map_id as number,
          depth_new: feature.properties?.depth_new as string,
          fill: feature.properties?.Fill_of as string,
          context: feature.properties?.Context_ID as string,
          type: feature.properties?.Ctx_type as string,
        }));
        console.log('featuresFound', featuresFound);

        useExcavationStore.getState().setContextsFound(featuresFound);

      });

      unsubscribe = useExcavationStore.subscribe((state, prev) => {

   
        /*its like
        const hovered = state.contextListHovered
        const clicked = state.contextListClicked
        use setPaintProperty to highlight polygons according to hovered and clicked */
        const { contextListHovered: hovered, contextListClicked: clicked } = state; 
        mapRef.current?.setPaintProperty('contexts-extrude', 'fill-extrusion-color', extrudeColor(hovered, clicked));
        mapRef.current?.setPaintProperty('contexts', 'fill-color', flatColor(hovered, clicked));
        mapRef.current?.setPaintProperty('contexts', 'fill-opacity', flatOpacity(hovered, clicked));

        if (state.extrude === prev.extrude) return
        if (state.extrude){

          toaster.create({
            description: (
              <>
                Select{'  '}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px',
                    margin:'0 5px',
                    borderRadius: '4px',
                    backgroundColor: '#e2d51b',
                    color: 'black',
                    verticalAlign: 'middle'
                  }}
                >
                  
                  <MdLayersClear size={'20px'} /> 
                  Flatten 
                </span>
                {'  '}
                to set a new point on the map
              </>
            ),
            type: "info", 
            closable: true
          })

          //same as const contextsFound = state.contextsFound
          const { contextsFound } = state;
          if (contextsFound.length === 0) return

          //keep only the clicked contexts, one feature per map_id
          /*contextsFound holds only information (id, depth, type) by the store, not the shapes. 
          To build 3D blocks you need the shapes, so this code gets 
          them from the contexts source.
          querySourceFeatures('contexts') returns the polygons MapLibre currently has loaded 
          from that source. 
          It can return the same polygon more than once, because the map is cut into square tiles 
          and a polygon may appear in several.
          */
          const foundIds = new Set(contextsFound.map((c) => c.map_id));
          const seenIds = new Set<number>();
          const usableSourceContexts: GeoJSON.Feature[] = [];

          for (const f of mapRef.current?.querySourceFeatures('contexts') ?? []) {
            const id = f.properties?.map_id as number;
            if (foundIds.has(id) && !seenIds.has(id)) {
              seenIds.add(id);
              //copy into a plain object, query results can't be sent to the worker as is
              usableSourceContexts.push({
                type: 'Feature',
                geometry: f.geometry,
                properties: { ...f.properties }
              });
            }
          }
          console.log('usableSourceContexts', usableSourceContexts);

          //sort in place by depth
          usableSourceContexts.sort((a, b) => Number(a.properties?.depth_new) - Number(b.properties?.depth_new));

          //empty bounds, extended by every clicked feature below
          const bounds = new maplibregl.LngLatBounds();

          let elevHeight = 3;
          let customHeight = 2;
          let customBase = 1;

          //stack from the largest depth_new (bottom) up to the smallest (top)
          [...usableSourceContexts].reverse().forEach((f) => {
            const props = (f.properties ??= {});
            props.customTop = elevHeight;
            props.customHeight = customHeight;
            props.customBase = customBase;
            elevHeight = customHeight + elevHeight;
            if ('coordinates' in f.geometry) extendBounds(bounds, f.geometry.coordinates);
          });

          console.log('usableSourceContexts last' , usableSourceContexts);


        let geojsondata:GeoJSON.FeatureCollection  = {
          "type": "FeatureCollection",
          "features": usableSourceContexts
        }
        //set geojson to layer as source
        // mapRef?.current?.setFilter('contexts-extrude', ['>',['id'] , 0] )
        mapRef?.current?.getSource<maplibregl.GeoJSONSource>("contexts-extrude")?.setData(geojsondata);

        let padding = {top: 60, bottom:60, left: 70, right: 70};
        let zoom=19;

        let smallSize = window.matchMedia('(max-width: 767px)').matches ? true:false;

        if (!smallSize) {
          console.log('IN smallSize');
          padding= {top: 120, bottom:120, left: 300, right: 120};
          zoom=20;
        } 
        


        mapRef?.current?.fitBounds(bounds, {
          padding,
          animate: true,
          linear:false,
          duration: 5000,
          pitch:70,
          bearing:40,
          zoom,
          offset:[3,3]
        });



        }
        else{
          let nogeojsondata:GeoJSON.FeatureCollection  = {
            "type": "FeatureCollection",
            "features": []
          }
          // mapRef?.current?.setFilter('contexts-extrude', ['==',["id"] , 0] );
          mapRef?.current?.getSource<maplibregl.GeoJSONSource>("contexts-extrude")?.setData(nogeojsondata);
          mapRef?.current?.flyTo({
              duration:3000,
              pitch:0,
              bearing:0  ,
              offset:[0,0]
            });
        };

      });

    });



    return () => {
      unsubscribe?.();
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: "100%", width: "100%" }}>
      <div id='map-container' ref={mapContainerRef} style={{ height: "100%", width: "100%" }}></div>
      {/* the MapTiler free plan requires the logo. anonymous: the request carries no cookies */}
      <a href='https://www.maptiler.com' target='_blank' rel='noreferrer'
        style={{ position: 'absolute', left: 10, bottom: 10 }}>
        <img src='https://api.maptiler.com/resources/logo.svg' alt='MapTiler logo' crossOrigin='anonymous' width={100} />
      </a>
    </div>
  )
}

export default Map
