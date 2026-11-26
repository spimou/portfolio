import { Flex, type FlexProps } from '@chakra-ui/react'

function PageSection(props: FlexProps) {
  return (
    <Flex
      as="section"
      direction="column"
      minH="100vh"
      w={{ base: '95%', lg: '80%', xl: '70%' }}
      margin={'10px'}
      padding={'10px'}
      mx="auto" 
      {...props}
    />
  )
}

export default PageSection