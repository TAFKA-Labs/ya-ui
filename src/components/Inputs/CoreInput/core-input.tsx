import React from 'react'
import styled from 'styled-components'

import { inputStyle } from '@styling/tokens'

const CoreInput = styled.input`
  ${inputStyle};
  width: 100%;
  cursor: text;
  ${({ theme }) => `
    padding: ${theme.spacings[1]}em ${theme.spacings[2]}em;

    &:disabled {
      background-color: ${theme.colors.black.background};
    }

    &:hover:not([disabled]):not(&:invalid) {
      color: black;
      border-color: ${theme.colors.primary.default};
    }
  `};
`

export default CoreInput
