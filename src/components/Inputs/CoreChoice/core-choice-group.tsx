import React, { ReactElement, ReactNode, FC } from 'react'
import styled from 'styled-components'

import { inputStyle } from '@styling/tokens'
import { InputError } from '../labels'

export const FieldsetLegend = styled.legend<{
  children: ReactNode
  hasError: boolean
}>`
  padding-inline-start: 4px;
  padding-inline-end: 4px;
  ${({ theme, hasError }) => `
    ${theme.typography.label};
    color: ${theme.colors[hasError ? 'negative' : 'black'].default};
  `}
`

export interface ChoiceGroupProps {
  children: ReactNode
  legend: string
  name?: string
  required?: boolean
  disabled?: boolean
  error?: string
  vertical?: boolean
}

const InputContainer = styled.div``

const ChoiceGroupContainer = styled.fieldset<{
  vertical: boolean
  hasError: boolean
}>`
  ${inputStyle};
  margin: 0;
  width: 100%;
  cursor: default;
  ${({ theme, vertical, hasError }) => `
    ${hasError && 'border-color:' + theme.colors.negative.default};

    > span {
      ${vertical && `display: block; margin: ${theme.spacings[2]}em;`};
    }

    &:focus-within {
      border-color: ${theme.colors.primary.default};
    }
  `}
`

const ChoiceGroup: FC<ChoiceGroupProps> = ({
  children,
  legend,
  error,
  disabled,
  name,
  vertical,
}: ChoiceGroupProps) => {
  const enhancedChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child as ReactElement<any>, { error, disabled, name })
  )
  return (
    <InputContainer>
      <ChoiceGroupContainer
        vertical={!!vertical}
        hasError={!!error}
        name={name}
      >
        <FieldsetLegend hasError={!!error}>{legend}</FieldsetLegend>
        {enhancedChildren}
      </ChoiceGroupContainer>
      <InputError id={error ? `${name || 'fieldset'}Error` : undefined}>
        {error || ' '}
      </InputError>
    </InputContainer>
  )
}

export default ChoiceGroup
