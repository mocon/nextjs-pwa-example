import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#4ca8ea',
    secondary: '#0070f3',
    light: '#cacaca',
    text: '#2d2e2d',
    background: '#fff',
  },
  fontFamilies: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '"Poppins", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32, 64],
}

export const GlobalStyles = createGlobalStyle<any>`
  /* CSS reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  body {
    font-family: ${({ theme }) => theme.fontFamilies.body};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.primary};
    background: linear-gradient(0deg, ${({ theme }) =>
      theme.colors.background} 0%, ${({ theme }) => theme.colors.primary} 100%);
  }

  #__next {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
