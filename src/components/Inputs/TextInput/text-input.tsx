import React, { FC } from 'react'
import styled from 'styled-components'

import { InputError, InputLabel } from '../labels'
import { Input, InputContainer } from '../CoreInput'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label: string
  /**
   * Error message
   */
  error?: string
}

const TextInput: FC<TextInputProps> = ({
  label,
  name,
  error,
  ...rest
}: TextInputProps) => {
  return (
    <InputContainer gridArea={name}>
      <InputLabel htmlFor={name} hasError={!!error}>
        {label}
      </InputLabel>
      <Input
        {...rest}
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}Error` : undefined}
      />
      <InputError id={error ? `${name || 'fieldset'}Error` : undefined}>
        {error || ' '}
      </InputError>
    </InputContainer>
  )
}

TextInput.displayName = 'TextInput'

export default TextInput
