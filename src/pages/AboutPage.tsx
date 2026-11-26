import { Box, Flex, Heading } from '@chakra-ui/react'
import PageSection from '../components/PageSection'
import PageArticle from '../components/PageArticle'

 

function AboutPage() {
  return (
    <Flex direction="column"> 
      <PageSection>

        <PageArticle>
            <Heading as="h1">Work Experience</Heading> 
        </PageArticle> 

        <PageArticle>
            <Heading as="h1">Education</Heading> 
        </PageArticle>         

        <PageArticle>
            <Heading as="h1">Publications</Heading> 
        </PageArticle>                 


      </PageSection>
    </Flex>
  )
}

export default AboutPage

