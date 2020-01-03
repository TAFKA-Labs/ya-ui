import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '@types'
import { InputError, InputLabel } from '../labels'
import { Input, InputContainer } from '../CoreInput'
import Photo from '../../Avatars/photo'

const UploadThumbnail = styled(Photo)`
  align-self: end;
`

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label: string
  /**
   * Error message
   */
  error?: string
  /**
   * Img src
   */
  src?: string
}

const FileInputContainer = styled(InputContainer)`
  display: grid;
  grid-gap: 0 0.3em;
  grid-template-columns: auto 1fr;
`

const FileUploadContainer = styled.div``

const FileInput: FC<FileInputProps> = ({
  label,
  name,
  error,
  src,
  ...rest
}: FileInputProps) => {
  return (
    <FileInputContainer gridArea={name}>
      <UploadThumbnail
        src={src}
        size={Size.L}
        aria-label={`${!src && 'empty'} image thumbnail`}
      />
      <FileUploadContainer>
        <InputLabel htmlFor={name} hasError={!!error}>
          {label}
        </InputLabel>
        <Input
          {...rest}
          type="file"
          id={name}
          name={name}
          aria-invalid={!!error}
          aria-describedby={error ? `${name || 'fieldset'}Error` : undefined}
        />
      </FileUploadContainer>
      <div />
      <InputError id={error ? `${name || 'fieldset'}Error` : undefined}>
        {error || ' '}
      </InputError>
    </FileInputContainer>
  )
}

FileInput.displayName = 'FileInput'

export default FileInput
