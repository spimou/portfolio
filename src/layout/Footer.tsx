import { Flex, Text } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex
      as="footer"
      w="100%"
      h="120px"
      align="center"
      justify="center"
      bg="bg"
      borderTop="1px solid"
      borderTopColor="brand.accent"
    >
      <Text textAlign="center">© Spiros Mousouris - 2026</Text>
    </Flex>
  )
}

export default Footer
