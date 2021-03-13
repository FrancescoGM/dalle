import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
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
    max-height: 45rem;

    padding: 2rem;
    border: 1px solid ${props => props.theme.colors.containerColor};
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 480px) {
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
      border-radius: none;
    }

    > h1 {
      margin-bottom: 32px;
    }
    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
    }
  }
`

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
  margin: 0.5rem 0 1.8rem;
`
export const ButtonContainer = styled.div`
  width: 100%;
  margin: 2rem 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 240px) {
    flex-direction: column;
    button {
      width: 100% !important;
    }
  }

  > button {
    width: 150px;
    height: 40px;
    border-radius: 4px;

    cursor: pointer;
    font-size: 18px;
    border: none;
    color: ${props => props.theme.colors.buttonTextColor};

    &:nth-child(1) {
      background-color: #bebebe;
    }
    &:nth-child(2) {
      background-color: ${props => props.theme.colors.primaryColor};
    }
  }
`
