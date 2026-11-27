import { Fragment } from 'react'
import { Box, Button, CloseButton, Dialog, Flex, Grid, IconButton, Portal, Text, Link, Drawer, useBreakpointValue, Code  } from '@chakra-ui/react'
import { useExcavationStore } from '../excavationStore'
import { FaRegCopyright } from "react-icons/fa6";
import { IoLayersSharp } from "react-icons/io5";
import { MdLayersClear } from "react-icons/md"; 
import { FaList } from "react-icons/fa";
import { useState } from 'react'




const Sidebar = () => {
    // const point= useExcavationStore((state) => state.coordsClicked);
    const contextsFound = useExcavationStore((state) => state.contextsFound) ;
    const extrude = useExcavationStore((state) => state.extrude) ;
    const [btnOpen, setBtnOpen] = useState<boolean>(false);

    //true below md, where the sidebar is a closable drawer instead of a permanent column
    const smallSize = useBreakpointValue({ base: true, md: false }) ?? false
    //the contexts the user closed the drawer on; a new map click gives a new array, which reopens it
    const [dismissed, setDismissed] = useState<typeof contextsFound | null>(null);
    const open = !smallSize || btnOpen || (contextsFound.length > 0 && dismissed !== contextsFound);


    const sortedContexts = [...contextsFound].sort((a, b) => Number(a.depth_new) - Number(b.depth_new));
    console.log('sortedContexts', sortedContexts);

    const drawerOpenBtn = (oc:boolean) => {
      if (smallSize) {
        setBtnOpen(oc);
        setDismissed(oc ? null : contextsFound);
      }
    }

    

    const extrudeBtnClicked = () => { 
      let next = !extrude
      useExcavationStore.getState().setExtrude(next);
    };

    const contextBtnMouseEnter = (map_id:number | null) => {
      useExcavationStore.getState().setContextListHovered(map_id);
    }

    const contextBtnClick = (map_id:number) => {
      useExcavationStore.getState().setContextListClicked(map_id);
    }
    

    const colors: Record<string, string> = {
      fill:"#ddc9b1",
      deposit:"#a38f71",
      layer:"#686567",
      cut:"#b3ac91",
      structure:"#dcac7c",
      wall:"#4e494d"
    };

  return (
  
<>


        <Drawer.Root
      open={open} 
      placement="start" 
      lazyMount
      unmountOnExit
      modal={false}
      closeOnInteractOutside={false}
    >

              <Button position="fixed" bg='gray.600' top="2" left="2" onClick={()=>drawerOpenBtn(true)} zIndex="docked" color="lightgrey" >
                <FaList />
              </Button>

             <Portal>
               <Drawer.Positioner pointerEvents="none">
                 <Drawer.Content left="0" right="0"  height="100%" pointerEvents="auto" bg='gray.600' fontSize="lg" maxW="none" width={{ base: "30%", md: "30%", xl: "20%" }} >
                         <Drawer.Header p="1" />
                   <Drawer.Body paddingRight="5px" paddingLeft="5px" mt={smallSize ? "30px" : undefined} >
                    

              
                        <div style={{ height: "100%", width: "100%", position: "relative" }}>

      <Box h="100%" overflowY="auto">
      {
        contextsFound.length>0 ? (
          !smallSize && <Flex  w="100%" gap="1" px="2" mt="2" alignItems="center">
            <Text as="small" flex="0 0 calc((100% - var(--chakra-spacing-1)) * 0.7)" minW="0" whiteSpace="normal" overflowWrap="anywhere">{sortedContexts.length} contexts in this point</Text>
            <Text as="small" flex="1" minW="0" textAlign="center">Depth</Text>
          </Flex> 
        ) : <Text as="small" display="block" textAlign="center" mt="100px">Click on Contexts (yellow), to see more</Text>
      }


       <Box position="relative" m="2">
        {/* depth column background, 30% of the parent (minus the 1 gap), as tall as the button rows */}
        {!smallSize && <Box position="absolute" top="0" bottom="0" right="0" w="calc((100% - var(--chakra-spacing-1)) * 0.3)" bgGradient="to-b" gradientFrom="#ddc9b1" gradientTo="#686567" />}
        <Grid templateColumns={smallSize ? "1fr" : "7fr 3fr"} columnGap="1" rowGap={smallSize ? "18px" : "2"} position="relative">
          {sortedContexts.map((item) => (
            <Fragment key={item.map_id}>
              <Button size={smallSize ? "xs" : undefined} onClick={()=>contextBtnClick(item.map_id)} onMouseEnter={()=>contextBtnMouseEnter(item.map_id)} onMouseLeave={()=>contextBtnMouseEnter(null)} variant="outline" bg={colors[item.type]} color="#000" _hover={{ borderColor: "white" }} h="auto" w="100%" minW="0" minH={smallSize ? "8" : undefined} py={smallSize ? "13px" : "2"} px={smallSize ? "15px" : undefined} whiteSpace="normal" textAlign={smallSize ? "center" : "left"} overflowWrap="anywhere" flexDirection="column" alignItems={smallSize ? "center" : "flex-start"} gap="0">
                {smallSize ? <Text>{item.context===''?'-':item.context}</Text> : <>
                  <Text><Text as="span" fontWeight="normal">Context : </Text>{item.context===''?'-':item.context} <Text as="span" fontWeight="normal">, Fill Of : </Text>{item.fill===''? '-': item.fill}</Text>
                  <Text fontSize="xs" fontWeight="normal">Type : <b> {item.type===''? '-': item.type} </b></Text>
                </>}
              </Button>
              {!smallSize && <Flex alignItems="center" justifyContent="center" color="#000">
                <Text fontSize="sm">{item.depth_new}</Text>
              </Flex>}
            </Fragment>
          ))}
        </Grid>
       </Box>
      </Box>

      <Flex position="absolute" bottom="2" left="2" right="2" zIndex="1" alignItems="center" justifyContent="space-between">
        <Dialog.Root placement="center">
          <Dialog.Trigger asChild>
            <IconButton aria-label="Copyright" variant="ghost" size="sm">
              <FaRegCopyright />
            </IconButton>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content width={{ base: "100%", lg: "80%" }} maxW={{ base: "100%", lg: "80%" }}>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
                <Dialog.Header>
                  <Dialog.Title>Disclaimer, Data Sources and Copyright, Changes and Methodology</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body >


                  <Text>
                    <strong style={{backgroundColor:"lightgrey", color:"black", padding:"2px"}}>Disclaimer</strong> 
                      <p style={{padding:"5px 0 5px 0"}}>
                        The following analysis is based on the observation of the available data and on the assumption that archaeological contexts are excavated at different depths and may partially overlap or contain one another.
                      </p>

                      <p style={{padding:"5px 0 5px 0"}}>
                        The analysis was carried out by drawing on the methodology developed for project related to the archaeological excavation at Sikyon, Greece, as published in:
                        Mousouris, S., Lolos, Y., & Giannakoula, C. (2024). <i>Methodology and guidelines for geovisualizing archaeological excavation data: The case of Sikyon, Greece. Journal of Greek Archaeology, 9, 35–46. </i><Link variant="underline" href="https://doi.org/10.32028/jga.v9i.2734"> https://doi.org/10.32028/jga.v9i.2734 </Link> 
                      </p>

                      <p style={{padding:"5px 0 5px 0"}}>
                        This application and its accompanying analysis do not constitute a specialised archaeological study. Rather, their purpose is to demonstrate the potential of geovisualization for archaeological excavation data and to illustrate how this approach can address the problem of overlapping polygons.
                      </p>
                    
                    <hr style={{padding:"10px 0 10px 0"}} /> 

                    
                    <strong style={{backgroundColor:"lightgrey", color:"black", padding:"2px"}}>Data sources and Copyright</strong> 
                      <p style={{padding:"5px 0 5px 0"}}> 
                        From the <Link variant="underline" href="https://archaeologydataservice.ac.uk/"> Archaeology Data Service UK </Link>, used the data from the collection : <Link variant="underline" href="https://archaeologydataservice.ac.uk/archives/collections/view/1004850/index.cfm"> Site and Post-Excavation Data from an Excavation and Evaluation at Bancombe Road, Somerton, Somerset 2019-2021 </Link> 
                      </p>

                      <p style={{padding:"5px 0 5px 0"}}> 
                        Official citation : 
                        Cotswold Archaeology (2022) <i>" Site and Post-Excavation Data from an Excavation and Evaluation at Bancombe Road, Somerton, Somerset 2019-2021 " </i> [data-set]. York: Archaeology Data Service [distributor]  <Link variant="underline" href="https://doi.org/10.5284/1100993"> https://doi.org/10.5284/1100993 </Link> 
                      </p>

                      <p style={{padding:"5px 0 5px 0"}}> 
                        Creator : Cotswold Archaeology  <br/>
                        Publisher : Archaeology Data Service <br/> 
                        Data copyright : © Cotswold Archaeology  <br/>
                        Licence	: This work is licensed under a   <Link variant="underline" href="https://creativecommons.org/licenses/by/4.0/"> Creative Commons Attribution 4.0 International License </Link> 
                      </p>

                      <p style={{padding:"5px 0 5px 0"}}>  
                        Datasets Used : 
                        <br/>

                        <u>1. Polygon Data from Site Survey</u>
                        <br/>
                        Cotswold Archaeology (2022). LNBR20: Polygon data from site survey [digital object]. York: Archaeology Data Service [distributor]. Object ID: 2221234.
                        <br/>
                        <Link variant="underline" href="https://archaeologydataservice.ac.uk/archives/collections/view/object.cfm?object_id=2221234"> https://archaeologydataservice.ac.uk/archives/collections/view/object.cfm?object_id=2221234 </Link>
                        <br/>  <br/>

                        <u>2. Digital Object Metadata</u>
                        <br/>
                        Cotswold Archaeology (2022). Database: Context register [digital object]. York: Archaeology Data Service [distributor]. Object ID: 2221300.
                        <br/>
                        <Link variant="underline" href="https://archaeologydataservice.ac.uk/archives/collections/view/object.cfm?object_id=2221300"> https://archaeologydataservice.ac.uk/archives/collections/view/object.cfm?object_id=2221300 </Link>
                      </p>
                      


                    <hr style={{padding:"10px 0 10px 0"}} /> 

                    
                    <strong style={{backgroundColor:"lightgrey", color:"black", padding:"2px"}}>Changes and Methodology</strong> 

                    <p style={{padding:"5px 0 5px 0"}}> 
                      The following modifications and processing steps were applied to the original datasets to prepare them for visualization.
                    </p>


                    <p style={{padding:"5px 0 5px 0"}}> 
                      <u>1. Export to GeoJSON Format</u> <br/>

                      To make the data compatible with MapLibre, the original polygon dataset was converted to GeoJSON format. <br/>
                        - The file <Code>LNBR20_CA_survey_data_Ply.zip</Code> was downloaded and imported into <Link variant="underline" href="https://mapshaper.org/"> Mapshaper </Link> <br/>
                        - The dataset was exported in GeoJSON format and named <Code>LNBR20_CA_survey_data_Ply.geojson. </Code><br/>
                        - The data were reprojected to WGS84. 
                    </p>



                    <p style={{padding:"5px 0 5px 0"}}> 
                      <u>2. Depth </u><br/>

                      The <Code>Context_Reg.csv</Code> file contains depth information, which is used to determine the extrusion order of the polygons. For the <Code>Depth</Code> column, only rows containing a valid numeric value or values in one of the following formats were retained:
                      <br/>
                      <Code>&lt; number </Code><br/>
                      <Code>number-number </Code><br/>
                      <Code>&gt;number </Code><br/>

                      <br/>
                      The following rules were applied to standardise the depth values: <br/>
                      - For values in the format <Code>&lt;number</Code> or <Code>&gt;number</Code>, only the numeric component was retained.<br/>
                      - For values in the format <Code>number-number</Code>, the average of the two numbers was calculated. <br/>
                      - A new column named <Code>depth_new</Code> was then created in Context_Reg.csv, containing the resulting numerical depth values.
                    </p>


                    <p style={{padding:"5px 0 5px 0"}}> 
                      <u>3. Matching Data Between the CSV and GeoJSON Files </u>  <br/>

                      The <Code>Context_Reg.csv</Code> file contains metadata associated with the polygons in <Code>LNBR20_CA_survey_data_Ply.geojson</Code>. Since there is no direct link between the two datasets (such as a shared unique identifier), the following matching logic was applied:
                      <br/><br/>

                      <i>Case 1: </i>A value exists in the <Code>Context</Code> column, but the <Code>Fill_of</Code> column is empty. <br/>
                      For example: <Code>Context: 1288</Code> and <Code> Fill_of: ""</Code> <br/>
                      The corresponding object in the <Code>LNBR20_CA_survey_data_Ply.geojson</Code> file has the same value in its <Code>Context_ID</Code> property and an empty <Code>Fill</Code> property:
                      <br/>
                      <Code>Context_ID: 1288</Code> and <Code> Fill: ""</Code> 
                      <br/><br/>

                      <i>Case 2: </i>Both the <Code>Context</Code> and <Code>Fill_of</Code> columns contain values.<br/>
                      For example: <Code>Context: 1289</Code> and <Code>Fill_of: 1288 </Code> <br/>

                      The corresponding object in the GeoJSON file contains the value of <Code>Fill_of</Code> in the <Code>Context_ID</Code> property and the value of <Code>Context</Code> in the <Code>Fill</Code> property: <br/>

                      <Code>Context_ID: 1288 </Code> and <Code>Fill: 1289</Code>
                      <br/><br/>
                      - If a single row in <Code>Context_Reg.csv </Code>corresponds to multiple polygons in the GeoJSON file, the metadata from that row are assigned to all corresponding polygons. This is based on the assumption that these polygons belong to the same depth level (e.g. different polygons belonging to the same construction at the same depth).
                      <br/>
                      - This assignment is performed only when the polygons have different coordinate sets in their geometry. If multiple polygons share identical coordinates, the corresponding row and polygons are skipped, as their relationship cannot be reliably determined based on the available information.
                      <br/>
                      - Once a match is identified, all values from the corresponding CSV row are retrieved, retaining their original column names, and added to the properties object of the corresponding GeoJSON feature as new key-value pairs.
                    </p>


                    <p style={{padding:"5px 0 5px 0"}}>  
                        <u>4. Assignment of Map IDs </u>  <br/> 
                        A new property named map_id is added to every GeoJSON object. Each object is assigned a sequential numeric identifier, starting from 1. This identifier facilitates the rendering and handling of individual polygons in mapLibre.
                    </p> 

                    
                    <p style={{padding:"5px 0 5px 0"}}>  
                      <u>5. Separation of the GeoJSON Dataset </u>  <br/> 

                      The file <Code>LNBR20_CA_survey_data_Ply.geojson</Code> is divided into two separate GeoJSON files according to the availability of depth information: <br/> 
                      - <Code>contexts.geojson</Code> (yellow): Contains all polygons with a valid <Code>depth_new</Code> value. These polygons are extruded during visualization.<br/> 
                      - <Code>excavation.geojson</Code> (blue): Contains all polygons without a <Code>depth_new</Code> value. These polygons are displayed without extrusion.
                    </p>
                
                                        




                  
                  

               


                  </Text>



      






                </Dialog.Body >
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>

        {  contextsFound.length>0 &&
          <Button onClick={extrudeBtnClicked} variant="outline" bg="#e2d51b" color="#000" _hover={{ borderColor: "white" }} h="auto" py="2" flexDirection="row" alignItems="center" gap="2">

            {extrude? (
              <>
                <MdLayersClear />
                {!smallSize && <Text>Flatten</Text>}
              </>
            ) : (
              <>
                <IoLayersSharp />
                {!smallSize && <Text>Extrude</Text>}
              </>
            )}

          </Button>
        }
      </Flex>

    </div>
                   </Drawer.Body>
                   {smallSize && (
                     <Drawer.CloseTrigger asChild position="absolute" top="3" right="3">
                       <CloseButton size="sm" onClick={()=>drawerOpenBtn(false)} />
                     </Drawer.CloseTrigger>
                   )}
                 </Drawer.Content>
               </Drawer.Positioner>
             </Portal>






     
    </Drawer.Root>
    </>
  )
}

export default Sidebar
