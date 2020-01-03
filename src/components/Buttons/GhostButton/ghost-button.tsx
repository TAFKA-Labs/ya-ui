import React, { SFC } from 'react'
import styled from 'styled-components'

import { inputStyle } from '@styling/tokens'
import { Variant, Size } from '@types'
import { CoreButton, CoreButtonProps } from '../CoreButton'

export interface GhostButtonProps extends CoreButtonProps {
  variant: Variant
}

const GhostButton = styled(CoreButton)<GhostButtonProps>`
  border-color: transparent;
  ${({ theme, variant = Variant.Primary }) => `
      color: ${theme.colors[variant].default};
      background-color: ${theme.colors[variant].default}1A;

      &:hover:not([disabled]) {
        color: ${theme.colors[variant].hover};
        background-color: ${theme.colors[variant].default}2A;
      }

      &:disabled {
        color: ${theme.colors[variant].disabled};
      }
  `};
`

GhostButton.displayName = 'GhostButton'

export default GhostButton
