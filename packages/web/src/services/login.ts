import api from './api'

interface LoginResponse {
  token: string
}

export function login(email: string, password: string): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    api.post('/login', { email, password }).then(res => resolve(res.data))
  })
}
