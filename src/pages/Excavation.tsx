import { Grid, Box } from "@chakra-ui/react" 
import Sidebar from "./components/Sidebar"
import MapGate from "./components/MapGate"
import DetailPanel from "./components/DetailPanel"
import { Toaster } from "@/components/ui/toaster"
import { useExcavationStore } from "./excavationStore"
import { useEffect } from 'react'

 

function Excavation() {
  useEffect(() => () => useExcavationStore.getState().reset(), [])
  return (
    <div style={{ height: "100vh" }} >

      <Grid
      h="100%"
        templateColumns={{
          base: "0px minmax(0, 1fr)",
          md: "minmax(0, 30%) minmax(0, 70%)",
          xl: "minmax(0, 20%) minmax(0, 80%)"
        }} 
        height="100%"
        minH={0}
      >
        <Box minW={0} minH={0} bg='gray.600' borderWidth="1px" borderColor="black"> 
          <Sidebar  />
        </Box>

        <Box minW={0} minH={0} bg='gray.300'  > 
          <MapGate />
        </Box>

      </Grid>

      <DetailPanel />
      <Toaster />

    </div>
  )
}

export default Excavation
