import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#4ca8ea',
    text: '#2d2e2d',
    background: '#fafafa',
  },
  fontFamilies: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64],
}

export const GlobalStyles = createGlobalStyle<any>`
  html {
    background: ${({ theme }) => theme.colors.primary};
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamilies.body};
    color: ${({ theme }) => theme.colors.text};
  }
`
