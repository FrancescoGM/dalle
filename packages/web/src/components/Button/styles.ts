import styled from 'styled-components'

export const ButtonStyle = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 4px;

  cursor: pointer;
  font-size: 18px;
  border: none;
  color: ${props => props.theme.colors.buttonTextColor};
  background-color: ${props => props.theme.colors.primaryColor};
  &:hover {
    background-color: ${props => props.theme.colors.primaryColorDark};
  }
`
