import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e4f4ff',
      100: '#bce0ff',
      200: '#8ac2ff',
      300: '#529bff',
      400: '#2c7de9',
      500: '#2858e9',
      600: '#1e3cb0',
      700: '#162d7e',
      800: '#0d1f4c',
      900: '#010b1a',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'brand.900',
        color: 'white',
        fontFamily: 'body',
      },
    },
  },
})

export default theme