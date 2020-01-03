import React, { SFC } from 'react'
import { action } from '@storybook/addon-actions'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import TextArea from './text-area'

export default {
  title: 'Inputs/TextArea',
}

const defaultProps = {
  name: 'about',
  label: 'About me',
  placeholder: 'About me...',
}

export const playground = () => {
  return (
    <TextArea
      name="about"
      label={text('Label', 'About me')}
      error={text('Error', '')}
      placeholder={text('Placeholder', 'About me...')}
      disabled={boolean('Disabled', false)}
    />
  )
}

export const disabled = () => {
  return <TextArea {...defaultProps} disabled />
}

export const custom = () => {
  return <TextArea {...defaultProps} rows={5} minLength={20} maxLength={200} />
}

export const error = () => {
  return <TextArea {...defaultProps} required error="Something went wrong!" />
}
