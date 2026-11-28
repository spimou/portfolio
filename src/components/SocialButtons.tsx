import { Button, Flex } from '@chakra-ui/react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

interface SocialLink {
  label: string
  url: string
  icon: IconType
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/spirosmousouris/', icon: FaLinkedin },
  { label: 'Instagram Profile', url: 'https://www.instagram.com/spirossnaps/', icon: FaInstagram },
]

function SocialButtons() {
  return (
    <Flex w="100%" justify="center" wrap="wrap" gap="4">
      {SOCIAL_LINKS.map(({ label, url, icon: Icon }) => (
        <Button key={url} asChild bg="brand.accent" color="brand.background" _hover={{ bg: 'brand.secondary' }}>
          <a href={url} target="_blank" rel="noreferrer">
            <Icon aria-hidden />
            {label}
          </a>
        </Button>
      ))}
    </Flex>
  )
}

export default SocialButtons
