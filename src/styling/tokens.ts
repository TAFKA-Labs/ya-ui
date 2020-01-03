import { css } from 'styled-components'
import DefaultTheme from './styled'
import { Size } from '@types'

export const inputStyle = css`
  box-sizing: border-box;
  font-size: 100%;
  transition: all 250ms ease-in;
  ${({ theme }) => `
    ${theme.typography.default};
    ${theme.formats.defaultBorder};
    &:disabled {
      border-color: ${theme.colors.black.disabled};
    }
    &:invalid:not([disabled]) {
      border-color: ${theme.colors.negative.default};
    }
  `}

  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`
