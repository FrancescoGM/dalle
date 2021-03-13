import React, { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'
import { SelectProps } from '../../models/globals'
import { Container, Input, Label } from './styles'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  options: SelectProps[]
}

const Radio: React.FC<RadioProps> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const { fieldName, defaultValue = '', registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked).value
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false
        })
        refs[0].checked = true
      },
      setValue: (refs: HTMLInputElement[], value: string) => {
        refs.forEach(ref => {
          if (String(value) === ref.value) {
            ref.checked = true
          }
        })
      }
    })
  }, [defaultValue, fieldName, registerField])

  return (
    <>
      {options.map((option, index) => (
        <Container key={`${name}.${index}`}>
          <Input
            name={name}
            value={option.value}
            id={`${name}.${index}`}
            type="radio"
            defaultChecked={
              defaultValue
                ? String(defaultValue) === String(option.value)
                : index === 0
            }
            ref={ref => {
              inputRefs.current[index] = ref as HTMLInputElement
            }}
            {...rest}
          />
          <Label htmlFor={`${name}.${index}`}>{option.text}</Label>
        </Container>
      ))}
    </>
  )
}
export default Radio
