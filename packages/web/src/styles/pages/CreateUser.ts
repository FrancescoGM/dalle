import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 320px) {
    padding: 1rem;
  }

  form {
    width: 30rem;
    height: 100%;
    padding: 2rem;
    border: 1px solid ${props => props.theme.colors.containerColor};
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
      border-radius: none;
    }
  }
`
export const InputContainer = styled.section`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-areas: 'a b' 'c c' 'd d' 'e e' 'f f';

  > div:nth-child(1) {
    grid-area: a;
  }
  > div:nth-child(2) {
    grid-area: b;
  }
  > div:nth-child(3) {
    grid-area: c;
  }
  > div:nth-child(4) {
    grid-area: d;
  }
  > div:nth-child(5) {
    grid-area: e;
  }
  > div:nth-child(6) {
    grid-area: f;
  }
  @media (max-width: 380px) {
    grid-template-areas: 'a a' 'b b' 'c c' 'd d' 'e e' 'f f';
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 300px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    > button {
      width: 100%;
    }
  }

  > button:nth-child(1) {
    background-color: #bebebe;
  }
`

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media (max-width: 300px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
  }
`
