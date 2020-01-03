import React, { FC } from 'react'
import styled from 'styled-components'

import { Input, InputContainer } from '../CoreInput'
import { InputError, InputLabel } from '../labels'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Input label
   */
  label: string
  /**
   * Error message
   */
  error?: string
  /**
   * Width in form
   */
  formSpan?: number
}

const TextArea: FC<TextAreaProps> = ({
  label,
  name,
  error,
  formSpan,
  ...rest
}: TextAreaProps) => {
  return (
    <InputContainer gridArea={name}>
      <InputLabel htmlFor={name} hasError={!!error}>
        {label}
      </InputLabel>
      <Input
        {...rest}
        as="textarea"
        id={name}
        name={name}
        aria-describedby={error ? `${name}Error` : undefined}
      />
      <InputError id={error ? `${name || 'fieldset'}Error` : undefined}>
        {error || ' '}
      </InputError>
    </InputContainer>
  )
}

TextArea.displayName = 'TextArea'

export default TextArea
