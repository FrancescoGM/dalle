import React, { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'
import { useState } from 'react'
import { Container, Label } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue = false, registerField } = useField(name)
  const [checked, setChecked] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      setValue: (value: boolean) => {
        setChecked(value)
      },
      getValue: () => {
        return checked
      },
      clearValue: () => {
        setChecked(false)
      }
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <Label>{label}</Label>
      <input ref={inputRef} checked={checked} type="checkbox" {...rest} />
    </Container>
  )
}
export default Input
