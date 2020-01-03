import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Size } from '@types'

export interface PhotoProps {
  src?: string
  size?: Size
}

const Photo = styled.div<{ size?: Size; src?: string }>`
  flex-grow: 0;
  box-sizing: border-box;
  ${({ theme, size = Size.M, src }) => `
    ${theme.formats.defaultBorder};
    ${src && 'border-width: 0'};
    border-color: ${theme.colors.primary.default}55;
    width: ${theme.spacings[size + 2] * 2}em;
    height: ${theme.spacings[size + 2] * 2}em;
    background-color: ${theme.colors.primary.background};
    background-image: ${src ? `url(${src})` : undefined};
    background-size: cover;
  `};
`

export default Photo
