import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`

export const Label = styled.label`
  font-size: 18px;
  line-height: 21px;

  color: ${props => props.theme.colors.textColor};
`
