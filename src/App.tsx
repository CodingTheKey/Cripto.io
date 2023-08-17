import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global/styles/global'

import theme from './global/styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world!</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
