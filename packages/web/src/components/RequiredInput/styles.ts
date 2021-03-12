import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;

  > input {
    width: 100%;
    height: 52px;

    padding: 1rem 2rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.containerColor};

    font-size: 16px;
    color: ${props => props.theme.colors.textColorLight};
    background-color: ${props => props.theme.colors.backgroundColor};

    outline: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    transition: 0.2s;

    &:focus {
      border: 1px solid ${props => props.theme.colors.primaryColor};
    }
    &:focus ~ label {
      color: ${props => props.theme.colors.primaryColor};
    }
    &:focus ~ label,
    &:valid ~ label {
      height: auto;
      transform: translate(-4px, -25px);
      font-size: 14px;
    }
  }
`
export const Label = styled.label`
  height: 19px;
  padding: 0 4px;

  position: absolute;
  top: calc(50% - 9.5px);
  left: 14px;

  cursor: text;
  font: 400 16px Roboto;
  color: ${props => props.theme.colors.textColorLighter};
  background-color: ${props => props.theme.colors.backgroundColor};

  transition: 0.2s;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`
