import React, { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />
}
export default Input
