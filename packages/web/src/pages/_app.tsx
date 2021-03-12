import { AuthProvider } from '../hooks/AuthProvider'
import { ThemeProvider } from '../hooks/ThemeProvider'
import GlobalStyles from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
