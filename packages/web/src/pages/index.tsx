import { useContext } from 'react'
import AuthContext from '../hooks/AuthProvider'

import Home from './home'
import Dashboard from './dashboard'

const Index: React.FC = () => {
  const { signed } = useContext(AuthContext)
  return signed ? <Dashboard /> : <Home />
}

export default Index
