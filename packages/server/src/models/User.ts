export interface Create {
  name: string
  surname: string
  password: string
  cpf: string
  email: string
  type: 'student' | 'teacher'
  dateOfBirth: Date
}
export interface Update {
  id: string
  name?: string
  surname?: string
  password?: string
  cpf?: string
  email?: string
  dateOfBirth?: Date
}
export interface SignIn {
  email: string
  password: string
}
