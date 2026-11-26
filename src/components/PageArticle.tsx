import { Flex, type FlexProps } from '@chakra-ui/react'

function PageArticle(props: FlexProps) {
  return (
    <Flex
      as="article"
      direction="column" 
      w={{ base: '100%', lg: '100%', xl: '100%' }}
      margin={'20px'}
      padding={'20px'}
      mx="auto" 
      scrollMarginTop="60px"
      {...props}
    />
  )
}

export default PageArticle