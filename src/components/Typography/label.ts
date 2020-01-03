import styled from 'styled-components'

import { Variant } from '@types'

export interface CoreLabelProps {
  children: string
  htmlFor: any
}

const Label = styled.label<{
  children: any
  htmlFor?: any
}>`
  ${({ theme }) => `
    ${theme.typography.label};
    color: ${theme.colors.black.hover};
  `}
`

export default Label
