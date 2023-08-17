import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  }

  :focus {
    outline: transparent;
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background-color: ${({ theme }) => theme.colors.gray_900};
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a, u {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }
`
