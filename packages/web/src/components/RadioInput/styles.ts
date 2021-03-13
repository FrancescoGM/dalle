import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`

export const Input = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const Label = styled.label`
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
  color: ${props => props.theme.colors.textColor};
  cursor: pointer;
`
