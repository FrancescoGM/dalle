import React, { useState, createContext, useCallback } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

interface ThemeContextData {
  theme: string
  toggleTheme(): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeContext.Provider value={{ theme: theme.title, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext
