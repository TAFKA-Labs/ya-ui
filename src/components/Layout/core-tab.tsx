import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import { Size, Variant } from '@types'
import { inputStyle } from '@styling/tokens'

export interface CoreTabProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Size
   */
  size?: Size
  /**
   * Variant
   */
  variant?: Variant
  /**
   * Is active?
   */
  isActive?: boolean
  /**
   * Icon
   */
  icon?: ReactNode
  /**
   * Icon on Right (default is left)
   */
  reverseOrder?: boolean
  /**
   * (Optional) hide text to shrink button size on small screens
   */
  responsive?: 'always' | 'smallOnly'
}

const CoreAnchorContainer = styled.a<CoreTabProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({
    theme,
    size = Size.M,
    variant = Variant.Primary,
    reverseOrder,
    isActive,
  }) => `
    ${theme.typography.button};
    ${theme.formats.defaultBorder};
    border-width: 0;
    font-size: ${theme.typography.fontSizes[size]}em;
    padding: ${theme.spacings[size]}em ${theme.spacings[size + 1]}em;
    flex-direction: ${reverseOrder && 'row-reverse'};
    color: ${
      isActive
        ? variant === 'white'
          ? theme.colors.primary.hover
          : theme.colors[variant].background
        : theme.colors[variant].default
    };
    background-color: ${isActive && theme.colors[variant].hover};

    &:hover {
      background-color: ${!isActive && theme.colors[variant].background};
    }

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

const CoreTab: FC<CoreTabProps> = ({ children, icon, ...rest }) => (
  <CoreAnchorContainer {...rest}>
    {icon}
    <span>{children}</span>
  </CoreAnchorContainer>
)

export default CoreTab
