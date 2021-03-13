import React, { useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import Button from '../components/Button'
import Radio from '../components/RadioInput'
import RequiredInput from '../components/RequiredInput'
import Logo from '../components/Logo'

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
      <Head>
        <title>Study | Criar conta</title>
      </Head>
      <Form ref={formRef} onSubmit={onSubmit}>
        <Logo />

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
