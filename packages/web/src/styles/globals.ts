import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-family: Roboto, sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html, body, #__next {
    width: 100%;
    height: 100%;
  }
  a {
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.colors.linkTextColor};
  }
`
