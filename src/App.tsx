import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global/styles/global'

import theme from './global/styles/theme'
import { Home } from './pages/home'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
