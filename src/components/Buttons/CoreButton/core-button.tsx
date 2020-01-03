import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Size } from '@types'
import { inputStyle } from '@styling/tokens'

export interface CoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Size
   */
  size?: Size
  /**
   * Icon
   */
  icon?: ReactNode
  /**
   * Icon on Right (default is left)
   */
  reverseOrder?: boolean
  /**
   * Stretch to fill container
   */
  fullWidth?: boolean
  /**
   * (Optional) hide text to shrink button size on small screens
   */
  responsive?: 'always' | 'smallOnly'
}

const CoreButtonContainer = styled.button<CoreButtonProps>`
  ${inputStyle};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  cursor: pointer;
  ${({ theme, size = Size.M, reverseOrder, fullWidth }) => `
    ${theme.typography.button};
    font-size: ${theme.typography.fontSizes[size]}em;
    padding:
      ${theme.spacings[size]}em
      ${theme.spacings[size + 2]}em;
    flex-direction: ${reverseOrder && 'row-reverse'};
    ${fullWidth && 'width: 100%'};

    svg {
      margin-right: ${!reverseOrder && 0.5}em;
      margin-left: ${reverseOrder && 0.5}em;
    }
  `}
  ${({ responsive }) =>
    responsive &&
    `
    svg {
      ${responsive === 'smallOnly' && 'display: none'};
    }
    @media (max-width: 739px) {
      svg {
        display: inline-block;
        margin: 0;
      }
      span {
        height: 0;
        width: 0;
        opacity: 0;
      }
    }
  `}
`

const CoreButton: FC<CoreButtonProps> = ({ children, icon, ...rest }) => (
  <CoreButtonContainer {...rest}>
    {icon}
    <span>{children}</span>
  </CoreButtonContainer>
)

export default CoreButton
