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

interface NavItem {
  label: string
  to: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Prototypes', to: '/poc' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

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
      borderBottomColor="yellow"
      boxShadow="0 2px 2px darkgray"
    >
      <Link asChild>
        <RouterLink to="/">
          <Text as="span">SM</Text>
        </RouterLink>
      </Link>

      <Flex as="nav" gap="6" hideBelow="lg">
        {NAV_ITEMS.map((item) => (
          <Link key={item.to} asChild>
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
            <IconButton variant="ghost" aria-label="Open menu">
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
                      <Link key={item.to} asChild>
                        <RouterLink to={item.to} onClick={() => setIsMenuOpen(false)}>
                          {item.label}
                        </RouterLink>
                      </Link>
                    ))}
                  </Flex>
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton />
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
