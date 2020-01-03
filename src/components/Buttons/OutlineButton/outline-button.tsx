import React, { SFC } from 'react'
import styled from 'styled-components'

import { inputStyle } from '@styling/tokens'
import { Variant } from '@types'
import { CoreButton, CoreButtonProps } from '../CoreButton'

export interface OutlineButtonProps extends CoreButtonProps {
  variant: Variant
}

const OutlineButton = styled(CoreButton)<OutlineButtonProps>`
  background-color: transparent;
  ${({ theme, variant = Variant.Primary }) => `
      color: ${theme.colors[variant].default};
      border-color: currentcolor;

      &:hover:not([disabled]) {
        color: ${theme.colors[variant].hover};
        background-color: ${theme.colors[variant].default}1A;
      }

      &:disabled {
        color: ${theme.colors[variant].disabled};
      }
  `};
`

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
