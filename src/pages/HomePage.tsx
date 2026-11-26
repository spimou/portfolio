import { Box, Flex, Heading, defineStyle } from '@chakra-ui/react'

// Shared page structure: copy this to other pages and apply with css={PAGE_SECTION_STYLE}
const PAGE_SECTION_STYLE = defineStyle({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: { base: '95%', lg: '80%', xl: '70%' },
  marginInline: 'auto',
  backgroundColor:'blue'
})

function HomePage() {
  return (
    <Flex direction="column">
      <Box w="100%" h="70vh" bg="gray.200" />
      <Box as="section" css={PAGE_SECTION_STYLE}>
        <Heading as="h1">Home</Heading>
      </Box>
    </Flex>
  )
}

export default HomePage
