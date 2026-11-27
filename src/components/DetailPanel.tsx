import { useEffect, useState } from 'react'
import { Badge, CloseButton, DataList, Drawer, Heading, Portal, Stack, useBreakpointValue } from '@chakra-ui/react'
import { useExcavationStore } from '../excavationStore' 

type PropertyValue = string | number
type ContextProperties = Record<string, PropertyValue>

interface ContextFeature {
  properties: ContextProperties
}

interface PropertyGroup {
  title: string
  keys: string[]
}

const CONTEXTS_URL = `${import.meta.env.BASE_URL}data/contexts.geojson`


//shown in this order; any other non-empty property ends up in "Other"
const PROPERTY_GROUPS: PropertyGroup[] = [
  { title: 'Identification', keys: ['Context_ID', 'Fill_of', 'Feature_type', 'Set_no'] },
  { title: 'Description', keys: ['Ctx_Description', 'Ctx_Comment', 'Comments'] },
  { title: 'Dimensions', keys: ['Length', 'Width', 'Depth'] },
  { title: 'Dating & sampling', keys: ['Prov_Period', 'Pub_period', 'Spot_date', 'Sample no(s)', 'Reason_for _sampling'] },
  { title: 'Excavation record', keys: ['Exc_inits', 'Exc_date', 'Date_Time', 'Contractor', 'Project_no', 'Site_code', 'Area/site_code', 'Process_code'] },
]
const HIDDEN_KEYS = ['map_id', 'Shape_Leng', 'Shape_Area', 'OBJECTID*', 'ID']

const TYPE_COLORS: Record<string, string> = {
  fill: '#ddc9b1',
  deposit: '#a38f71',
  layer: '#686567',
  cut: '#b3ac91',
  structure: '#dcac7c',
  wall: '#4e494d',
}

//empty, null or whitespace-only values are shown as a dash
const toValue = (value: PropertyValue | null | undefined) =>
  value === undefined || value === null || String(value).trim() === '' ? '-' : value

const toLabel = (key: string) => key.replace(/[_*]/g, ' ').replace(/\s+/g, ' ').trim()

const buildGroups = (properties: ContextProperties) => {
  const used = new Set<string>(HIDDEN_KEYS)
  const groups = PROPERTY_GROUPS.map(({ title, keys }) => {
    keys.forEach((key) => used.add(key))
    return { title, entries: keys.map((key) => [key, toValue(properties[key])] as const) }
  })
  // const others = Object.keys(properties).filter((key) => !used.has(key))
  // groups.push({ title: 'Other', entries: others.map((key) => [key, toValue(properties[key])] as const) })
  return groups
}

const DetailPanel = () => {
  const smallSize = useBreakpointValue({ base: true, md: false }) ?? false
  const id = useExcavationStore((state) => state.contextListClicked)
  const [selected, setSelected] = useState<ContextProperties | null>(null)

  //go through the geojson, find the feature with this map_id and keep only its properties
  useEffect(() => {
    if (id === null) return
    fetch(CONTEXTS_URL)
      .then((res) => res.json())
      .then((data: { features: ContextFeature[] }) => {
        const feature = data.features.find((f) => f.properties.map_id === id)
        if (feature) setSelected(feature.properties)
      })
  }, [id])

  //the drawer opens once the properties of the clicked context were found;
  //`selected` is kept while it slides out, so the content doesn't blank
  const open = id !== null && selected?.map_id === id
  const type = String(selected?.Ctx_type ?? '')

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => { if (!e.open) useExcavationStore.getState().setContextListClicked(null) }}
      placement="end"
      modal={false}
      closeOnInteractOutside={false}
      //the sidebar drawer is a lower layer: when it closes, zag dismisses every layer above it, this one included
      onRequestDismiss={(e) => e.preventDefault()}
    >
      <Portal>
        <Drawer.Positioner pointerEvents="none" paddingTop="60px">
          <Drawer.Content height="100%" pointerEvents="auto" maxW="none" width={{ base: "50%", md: "40%", xl: "25%" }} bg="#2d2b2b">
            <Drawer.Header borderBottomWidth="1px" flexDirection="column" alignItems="flex-start" gap="2">
              <Drawer.Title>Context {selected?.Context_ID || '-'}</Drawer.Title>
              {type && <Badge bg={TYPE_COLORS[type]} color="#000" textTransform="capitalize">{type}</Badge>}
            </Drawer.Header>
            <Drawer.Body overflowX="hidden">
              <Stack gap="6">
                {selected && buildGroups(selected).map((group) => (
                  <Stack key={group.title} gap="2">
                    <Heading size="xs" textTransform="uppercase" letterSpacing="wider" color="fg.muted" pb="2" borderBottomWidth="1px" borderColor="white">
                      {group.title}
                    </Heading>
                    <DataList.Root size="sm" orientation={smallSize ? "vertical" : "horizontal"}>
                      {group.entries.map(([key, value]) => (
                        <DataList.Item key={key}>
                          <DataList.ItemLabel minW={smallSize ? undefined : "120px"}>{toLabel(key)}</DataList.ItemLabel>
                          <DataList.ItemValue minW="0" overflowWrap="anywhere">{value}</DataList.ItemValue>
                        </DataList.Item>
                      ))}
                    </DataList.Root>
                  </Stack>
                ))}
              </Stack>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild position="absolute" top="3" right="3">
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default DetailPanel
