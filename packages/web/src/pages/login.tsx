import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useState } from 'react'
import RequiredInput from '../components/RequiredInput'
import { Logo } from '../styles/components/Logo'
import {
  ButtonContainer,
  CheckboxContainer,
  Container
} from '../styles/pages/Login'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [passwordType, setPasswordType] = useState('password')
  const { push } = useRouter()

  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={onSubmit}>
        <Logo>Study</Logo>
        <section>
          <RequiredInput name="email" label="E-mail" type="email" />
          <RequiredInput name="password" label="Senha" type={passwordType} />
        </section>
        <CheckboxContainer>
          <input
            id="hide-password"
            type="checkbox"
            onChange={event =>
              setPasswordType(event.target.checked ? 'text' : 'password')
            }
          />
          <label htmlFor="hide-password">Mostrar senha</label>
        </CheckboxContainer>
        <a>Esqueceu sua senha?</a>
        <ButtonContainer>
          <button type="button" onClick={() => push('/')}>
            Cancelar
          </button>
          <button type="submit">Entrar</button>
        </ButtonContainer>
        <a>Não Possui conta ainda?</a>
      </Form>
    </Container>
  )
}

export default Login
