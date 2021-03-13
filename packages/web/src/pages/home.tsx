import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IoLogInOutline } from 'react-icons/io5'

import { Container, ImageSection, TextSection } from '../styles/pages/Home'

const Home: React.FC = () => {
  const { push } = useRouter()
  return (
    <Container>
      <Head>
        <title>Study</title>
      </Head>
      <TextSection>
        <h1>Plataforma de estudos. Agora para todos.</h1>
        <p>
          Criamos o <span>Study</span> pensando nas dificuldades que a pandemia
          trouxe ao ensino. Agora disponível para ambos lados do conhecimento,
          professores e alunos.
        </p>
        <div>
          <button type="button" onClick={() => push('/login')}>
            <IoLogInOutline /> Entrar
          </button>
          <button type="button" onClick={() => push('/createUser')}>
            Criar nova conta
          </button>
        </div>
      </TextSection>
      <ImageSection>
        <img src="/assets/images/video-call.svg" />
      </ImageSection>
    </Container>
  )
}

export default Home
