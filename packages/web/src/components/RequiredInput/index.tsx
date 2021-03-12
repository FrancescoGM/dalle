import React from 'react'
import Input, { InputProps } from '../containers/Input'
import { Container, Label } from './styles'

interface RequiredInputProps extends InputProps {
  label: string
  className?: string
}

const RequiredInput: React.FC<RequiredInputProps> = ({
  name,
  label,
  className,
  ...rest
}) => {
  return (
    <Container className={className}>
      <Input name={name} id={name} className={className} required {...rest} />
      <Label htmlFor={name}>{label}</Label>
    </Container>
  )
}
export default RequiredInput
