import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: Poppins;
  font-style: italic;
  font-weight: bold;
  font-size: 46px;
  line-height: 69px;
  color: ${props => props.theme.colors.logoColorText};
`

const Logo: React.FC = () => {
  return <H1>Study</H1>
}

export default Logo
