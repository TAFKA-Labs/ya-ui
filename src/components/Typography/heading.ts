import styled from 'styled-components'

import { Variant } from '@types'

export interface CoreHeadingProps {
  children: string
  variant: Variant
}

const Heading = styled.h1<CoreHeadingProps>`
  ${({ theme, variant = Variant.Primary }) => `
    ${theme.typography.heading};
    color: ${theme.colors[variant].hover};
  `}
`

export default Heading
