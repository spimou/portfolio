
import { create } from 'zustand'

type context = {map_id:number, depth_new:string, fill:string, context:string, type:string} ;
type coords = {x:number, y:number} ;

type ExcavationState = {
    contextsFound:context[], 
    contextListClicked:number | null,
    contextListHovered:number | null,
    extrude:boolean,
    coordsClicked:coords | null,
    setContextsFound:(contexts:context[]) => void,
    setContextListClicked:(context:number | null) => void,
    setContextListHovered:(context:number | null) => void,
    setExtrude:(extrude:boolean) => void,
    setCoordsClicked:(coords:coords) => void,
    reset:() => void
}

export const useExcavationStore = create<ExcavationState>((set)=>({
    contextsFound:[],
    contextListClicked:null,
    contextListHovered:null,
    extrude:false,
    coordsClicked:null,
    setContextsFound:(contexts:context[]) => set ({contextsFound:contexts, extrude: false, contextListClicked:null}),
    setContextListClicked:(context:number | null) => set ({contextListClicked:context}),
    setContextListHovered:(context:number | null) => set ({contextListHovered:context}),
    setExtrude:(extrude:boolean) => set ({extrude:extrude}),
    setCoordsClicked:(coords:coords) => set ({coordsClicked:coords}),
    reset: () => set({
        contextsFound:[], 
        contextListClicked:null,
        contextListHovered:null,
        extrude:false,
        coordsClicked:null
    })
}))