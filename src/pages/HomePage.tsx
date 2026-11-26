import { Box, Flex, Heading } from '@chakra-ui/react'
import PageSection from '../components/PageSection'
import PageArticle from '../components/PageArticle'

 

function HomePage() {
  return (
    <Flex direction="column">
      <Box w="100%" h="70vh" bg="gray.200" />
      <PageSection>

        <PageArticle id="projects">
            <Heading as="h1">Selected Projects</Heading> 
        </PageArticle>

        <PageArticle id="skills">
            <Heading as="h1">Skills & Expertise</Heading> 
        </PageArticle>

        <PageArticle id="contact">
            <Heading as="h1">Contact</Heading> 
        </PageArticle>

        


      </PageSection>
    </Flex>
  )
}

export default HomePage
