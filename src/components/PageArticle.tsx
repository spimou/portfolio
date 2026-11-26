import { Flex, type FlexProps } from '@chakra-ui/react'

function PageArticle(props: FlexProps) {
  return (
    <Flex
      as="article"
      direction="column" 
      w={{ base: '100%', lg: '100%', xl: '100%' }}
      margin={'5px'}
      padding={'5px'}
      mx="auto"
      bg="blue"
      scrollMarginTop="60px"
      {...props}
    />
  )
}

export default PageArticle