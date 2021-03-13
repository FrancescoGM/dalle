import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useRouter } from 'next/router'
import React from 'react'
import { useRef } from 'react'
import Button from '../components/Button'
import Radio from '../components/RadioInput'
import RequiredInput from '../components/RequiredInput'
import { Logo } from '../styles/components/Logo'
import {
  ButtonContainer,
  Container,
  InputContainer,
  RadioContainer
} from '../styles/pages/CreateUser'

const CreateUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { push } = useRouter()

  function onSubmit(data: any) {
    console.log(data)
  }
  return (
    <Container>
      <Form ref={formRef} onSubmit={onSubmit}>
        <Logo>Study</Logo>

        <InputContainer>
          <RequiredInput name="name" label="Nome" />
          <RequiredInput name="surname" label="Sobrenome" />
          <RequiredInput name="email" label="E-mail" type="email" />
          <RequiredInput name="password" label="Senha" type="password" />
          <RequiredInput
            name="confirmPassword"
            label="Confirmar senha"
            type="password"
          />
          <RequiredInput
            name="dateOfBirth"
            label="Data de Nascimento"
            type="date"
          />
        </InputContainer>
        <RadioContainer>
          <Radio
            name="type"
            options={[
              { text: 'Estudante', value: 'student' },
              { text: 'Professor', value: 'teacher' }
            ]}
          />
        </RadioContainer>
        <ButtonContainer>
          <Button type="button" onClick={() => push('/')}>
            Voltar
          </Button>
          <Button type="submit">Criar conta</Button>
        </ButtonContainer>
        <a onClick={() => push('/login')}>Já possuí conta?</a>
      </Form>
    </Container>
  )
}

export default CreateUser
