import { useState } from 'react'
import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  IconButton,
  Link,
  Portal,
  Text,
} from '@chakra-ui/react'
import { LuMenu } from 'react-icons/lu'
import { Link as RouterLink } from 'react-router'
import { NAV_ITEMS } from '../navigation'

const NAV_LINK_PROPS = {
  color: 'fg',
  _hover: { textDecorationColor: 'brand.secondary' },
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      w="100%"
      h="60px"
      px="4"
      align="center"
      justify={{ base: 'space-between', xl: 'center' }}
      gap={{ base: '4', xl: '700px' }}
      bg="bg"
      opacity="0.7"
      borderBottom="1px solid"
      borderBottomColor="brand.accent"
      boxShadow="header"
    >
      <Link asChild {...NAV_LINK_PROPS}>
        <RouterLink to="/">
          <Text as="span" color={'brand.accent'}>SM</Text>
        </RouterLink>
      </Link>

      <Flex as="nav" gap="6" hideBelow="lg">
        {NAV_ITEMS.map((item) => (
          <Link key={item.to} asChild {...NAV_LINK_PROPS}>
            <RouterLink to={item.to}>{item.label}</RouterLink>
          </Link>
        ))}
      </Flex>

      <Box hideFrom="lg">
        <Drawer.Root
          placement="top"
          open={isMenuOpen}
          onOpenChange={(details) => setIsMenuOpen(details.open)}
        >
          <Drawer.Trigger asChild>
            <IconButton variant="ghost" color="brand.secondary" aria-label="Open menu">
              <LuMenu />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Menu</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <Flex as="nav" direction="column" align="flex-start" gap="4">
                    {NAV_ITEMS.map((item) => (
                      <Link key={item.to} asChild {...NAV_LINK_PROPS}>
                        <RouterLink to={item.to} onClick={() => setIsMenuOpen(false)}>
                          {item.label}
                        </RouterLink>
                      </Link>
                    ))}
                  </Flex>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton color="brand.secondary" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Box>
    </Flex>
  )
}

export default Header
