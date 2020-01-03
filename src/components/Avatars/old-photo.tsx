import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Size } from '@types'

export interface PhotoProps {
  src?: string
  size?: Size
  alt: string
}

const PhotoContainer = styled.div<{ size: Size; fake: boolean }>`
  display: inline-block;
  ${({ theme, size = Size.M, fake }) => `
    ${theme.formats.defaultBorder};
    border-color: white;
    background-color: ${fake ? theme.colors.black.background : 'transparent'};
    min-width: ${theme.spacings[size + 2] * 2}em;
    min-height: ${theme.spacings[size + 2] * 2}em;
    img {
      ${theme.formats.defaultBorder};
      border-width: 0;
      width: ${theme.spacings[size + 2] * 2}em;
      height: ${theme.spacings[size + 2] * 2}em;
    }
  `};

  img {
    visibility: ${({ fake }) => (fake ? 'hidden' : 'visible')};
    background-color: transparent;
  }
`

const Photo: FC<PhotoProps> = ({ src, size = Size.M, alt }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const hasLoaded = () => setLoaded(true)
  const hasError = () => setError(true)

  const fake = !src || !loaded || !!error
  const betterAlt = !src || !!error ? `${alt} missing` : alt

  return (
    <PhotoContainer fake={fake} size={size}>
      <img src={src} alt={betterAlt} onLoad={hasLoaded} onError={hasError} />
    </PhotoContainer>
  )
}

Photo.displayName = 'Photo'

export default Photo
