import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarProvider } from '../contexts/SidebarContext'
import { makeServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ChakraProvider>
  )
}

export default MyApp
