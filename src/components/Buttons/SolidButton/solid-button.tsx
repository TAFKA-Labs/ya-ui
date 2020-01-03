import React, { FC } from 'react'
import styled from 'styled-components'

import { inputStyle } from '@styling/tokens'
import { Variant } from '@types'
import { CoreButton, CoreButtonProps } from '../CoreButton'

export interface SolidButtonProps extends CoreButtonProps {
  variant: Variant
}

const SolidButton = styled(CoreButton)<SolidButtonProps>`
  color: white;
  border-color: transparent;
  ${({ theme, variant = Variant.Primary }) => `
      background-color: ${theme.colors[variant].default};

      &:hover:not([disabled]) {
        background-color: ${theme.colors[variant].hover};
      }

      &:disabled {
        background-color: ${theme.colors[variant].disabled};
      }
  `};
`

SolidButton.displayName = 'SolidButton'

export default SolidButton
