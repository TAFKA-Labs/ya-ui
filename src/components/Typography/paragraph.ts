import styled from 'styled-components'

import { Variant } from '@types'

export interface CoreParagraphProps {
  children: string
  variant: Variant
}

const Paragraph = styled.p<CoreParagraphProps>`
  ${({ theme, variant = Variant.Black }) => `
    ${theme.typography.default};
    color: inherit;
  `}
`

export default Paragraph
