import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function MainLayout() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" w="100%">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}

export default MainLayout
