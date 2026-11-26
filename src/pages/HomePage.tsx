import { Box, Flex, Heading } from '@chakra-ui/react'
import PageSection from '../components/PageSection'

 

function HomePage() {
  return (
    <Flex direction="column">
      <Box w="100%" h="70vh" bg="gray.200" />
      <PageSection>
        
        <Heading as="h1">Home</Heading> 


      </PageSection>
    </Flex>
  )
}

export default HomePage
