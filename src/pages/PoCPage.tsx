import { Box, Flex, Heading } from '@chakra-ui/react'
import PageSection from '../components/PageSection'
import PageArticle from '../components/PageArticle'

 

function PoCPage() {
  return (
    <Flex direction="column"> 
      <PageSection>

        <PageArticle>
            <Heading as="h1">Excavation Inspector</Heading> 
        </PageArticle> 

        <PageArticle>
            <Heading as="h1">Cargo Platform</Heading> 
        </PageArticle>         


      </PageSection>
    </Flex>
  )
}

export default PoCPage
