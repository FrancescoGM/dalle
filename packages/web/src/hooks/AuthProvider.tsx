import React, { createContext, useState } from 'react'
import { login } from '../services/login'
import api from '../services/api'

interface AuthContextData {
  signed: boolean
  signIn(email: string, password: string): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<boolean | null>(null)

  async function signIn(email: string, password: string): Promise<void> {
    const res = await login(email, password)
    api.defaults.headers.Authorization = `Bearer ${res.token}`
    setUser(true)
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
