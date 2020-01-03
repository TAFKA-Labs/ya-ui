import styled from 'styled-components'
import { Label } from '../Typography'

export const InputLabel = styled(Label)<{
  children: any
  htmlFor: any
  hasError?: boolean
}>`
  ${({ theme, hasError = false }) => `
    cursor: text;
    color: ${theme.colors[hasError ? 'negative' : 'black'].default};
  `}
`

export const InputError = styled.span<{ children: string }>`
  ${({ theme }) => `
    ${theme.typography.label};
    color: ${theme.colors.negative.hover};
  `}
  display: block;
  text-align: right;
  min-height: 1.4em;
  min-width: 1.4em;
`
