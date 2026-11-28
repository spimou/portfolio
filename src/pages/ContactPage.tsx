import { Heading, Text } from '@chakra-ui/react'
import DownloadCvButton from '../components/DownloadCvButton'
import PageArticle from '../components/PageArticle'
import PageSection from '../components/PageSection'
import SocialButtons from '../components/SocialButtons'

function ContactPage() {
  return (
    // Override the full viewport height so the footer stays in view
    <PageSection minH="auto">
      <PageArticle gap="4">
        <Heading as="h1">Contact</Heading>
        <Text textAlign="center"color="brand.textSoft">Have a question, an idea, or a project in mind?</Text>
        <SocialButtons />
        <Text textAlign="center" color="fg.muted">
          or
        </Text>
        <DownloadCvButton />
      </PageArticle>
    </PageSection>
  )
}

export default ContactPage
