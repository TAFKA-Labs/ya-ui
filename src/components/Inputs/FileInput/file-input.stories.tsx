import React, { SFC } from 'react'
import { action } from '@storybook/addon-actions'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import FileInput from './file-input'

export default {
  title: 'Inputs/FileInput',
}

const defaultProps = {
  name: 'photo',
  label: 'Upload photo or logo',
}

export const playground = () => {
  return (
    <FileInput
      name="photo"
      label={text('Label', 'Upload photo or logo')}
      error={text('Error', '')}
      disabled={boolean('Disabled', false)}
    />
  )
}

export const src = () => {
  return (
    <FileInput
      {...defaultProps}
      src="https://randomuser.me/api/portraits/men/86.jpg"
    />
  )
}

export const disabled = () => {
  return <FileInput {...defaultProps} disabled />
}

export const error = () => {
  return (
    <FileInput
      {...defaultProps}
      required
      src="https://randomuser.me/api/portrats/men/86.jpg"
      error="Something went wrong!"
    />
  )
}
