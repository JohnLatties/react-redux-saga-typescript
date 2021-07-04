import { createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import theme from './theme'

interface StyleProviderProps {
  children: JSX.Element
}

interface StyleContextData {
  theme: typeof theme
}

const StyleContext = createContext<StyleContextData>({} as StyleContextData)

const StyleProvider = ({ children }: StyleProviderProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyleContext.Provider value={{ theme }}>
          {children}
        </StyleContext.Provider>
      </ThemeProvider>
    </>
  )
}

export const useTheme = () => useContext(StyleContext)

type Theme = typeof theme
export interface ThemeProps {
  theme: Theme
}

export default StyleProvider
