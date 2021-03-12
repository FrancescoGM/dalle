import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  padding: 3rem;
  gap: 3rem;

  background-color: ${props => props.theme.colors.backgroundColor};

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    padding: 2rem 1.4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const TextSection = styled.article`
  max-width: 620px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    text-align: center;
    justify-content: center;
  }
  > h1 {
    margin-bottom: 0.3rem;

    font-family: Poppins, sans-serif;
    font-size: 3rem;
    line-height: 3.63rem;
    font-weight: 400;
    color: ${props => props.theme.colors.titleColor};
  }
  > p {
    margin-bottom: 3.2rem;

    font-family: Roboto, sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    color: ${props => props.theme.colors.textColorLighter};
    > span {
      font-family: Poppins, sans-serif;
      font-weight: bolder;
      font-style: italic;
      color: ${props => props.theme.colors.logoColorText};
    }
  }
  > div {
    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: left;
      align-items: flex-start !important;
    }

    display: flex;
    align-items: center;
    gap: 1.2rem;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;

      border: 0;
      border-radius: 4px;
      padding: 0.6rem 0;

      font-size: 1.4rem;
      font-weight: bold;

      cursor: pointer;
      transition: background-color 0.3s;
      color: ${props => props.theme.colors.buttonTextColor};

      &:nth-child(1) {
        width: 10rem;
        background-color: ${props => props.theme.colors.buttonBlueBackground};
        &:hover {
          background-color: ${props =>
            props.theme.colors.buttonBlueBackgroundHover};
        }
        svg {
          margin-bottom: 4px;
        }
      }
      &:nth-child(2) {
        width: 16rem;
        background-color: ${props => props.theme.colors.buttonYellowBackground};
        &:hover {
          background-color: ${props =>
            props.theme.colors.buttonYellowBackgroundHover};
        }
      }
      svg {
        fill: ${props => props.theme.colors.buttonTextColor};
      }
    }
  }
`
export const ImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 430px;
    width: 100%;
  }
`
