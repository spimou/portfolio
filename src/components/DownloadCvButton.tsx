import { Button, Flex } from '@chakra-ui/react'
import { FaFilePdf } from 'react-icons/fa6'

// Files in public/ are served under Vite's base path
const CV_URL = `${import.meta.env.BASE_URL}assets/Spyridon-Mousouris-CV.pdf`

function DownloadCvButton() {
  return (
    <Flex w="100%" justify="center">
      <Button asChild bg="brand.accent" color="brand.background" _hover={{ bg: 'brand.secondary' }}>
        <a href={CV_URL} target="_blank" rel="noreferrer">
          <FaFilePdf aria-hidden />
          Download CV
        </a>
      </Button>
    </Flex>
  )
}

export default DownloadCvButton
