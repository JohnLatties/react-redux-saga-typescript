import { createGlobalStyle, DefaultTheme, ThemeProps } from 'styled-components'

type Global = ThemeProps<DefaultTheme>

export const GlobalStyle = createGlobalStyle<Global>`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html, body, #root {
  max-height: 100vh;
  max-width: 100vw;
  
  width: 100%;
  height: 100%;
}
  
html {
  font-family: 'Poppins', sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 255);
}

body {
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
`
