import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export interface ChoiceOptionProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error message
   */
  id: string
  /**
   * Children
   */
  children: ReactNode
}

const ChoiceOptionInput = styled.input`
  font-size: 110%;
  cursor: pointer;
  width: 1em;
  height: 1em;
  margin: 0;
`

const ChoiceOptionLabel = styled.label<{
  children: ReactNode
  htmlFor?: string
}>`
  ${({ theme }) => `
    padding: ${theme.spacings[1]}em;
  `};
  cursor: pointer;
`

const ChoiceOptionContainer = styled.span`
  display: inline-flex;
  align-items: center;
  ${({ theme }) => `
    margin: 0 ${theme.spacings[2]}em;
  `};
`

const ChoiceOption: FC<ChoiceOptionProps> = ({ children, id, ...rest }) => {
  return (
    <ChoiceOptionContainer>
      <ChoiceOptionInput {...rest} type="radio" id={id} />
      <ChoiceOptionLabel htmlFor={id}>{children}</ChoiceOptionLabel>
    </ChoiceOptionContainer>
  )
}

export default ChoiceOption
