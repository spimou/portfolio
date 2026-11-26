import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
// import { ThemeProvider } from "next-themes"
import { system } from "./theme"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider value={system}> 
        <App /> 
    </ChakraProvider>
  </StrictMode>,
)
