import { Box, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { getPageTitle } from '../navigation'
import Footer from './Footer'
import Header from './Header'

function MainLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = getPageTitle(pathname, hash)
  }, [pathname, hash])

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex="1" w="100%">
        <Outlet />
      </Box>
      <Footer />
      <ScrollRestoration />
    </Flex>
  )
}

export default MainLayout
