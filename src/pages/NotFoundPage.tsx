import { Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router'
import PageArticle from '../components/PageArticle'
import PageSection from '../components/PageSection'

function NotFoundPage() {
  return (
    // Override the full viewport height so the footer stays in view
    <PageSection minH="auto" justify="center">
      <PageArticle alignItems="center" textAlign="center" gap="4" borderBottom="none">
        <Heading as="h1" size="4xl">404</Heading>
        <Text color="brand.textSoft">The page you are looking for does not exist.</Text>
        <Button asChild bg="brand.accent" color="brand.background" _hover={{ bg: 'brand.secondary' }}>
          <Link to="/">Back to home</Link>
        </Button>
      </PageArticle>
    </PageSection>
  )
}

export default NotFoundPage
