import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router'

function Header() {
  return (
    <Flex as="header" w="100%" h="60px" px="4" align="center" bg="#221e1b" color="#1a2a3d">
      <Box as="nav">
        <Link to="/">Home</Link> | <Link to="/poc">PoC</Link> |{' '}
        <Link to="/about">About</Link>
      </Box>
    </Flex>
  )
}

export default Header
