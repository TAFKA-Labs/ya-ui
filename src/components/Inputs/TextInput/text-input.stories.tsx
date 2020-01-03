import React, { SFC } from 'react'
import { action } from '@storybook/addon-actions'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import TextInput from './text-input'

export default {
  title: 'Inputs/TextInput',
}

const defaultProps = {
  name: 'search',
  label: 'Submit',
  placeholder: 'Search...',
}

export const playground = () => {
  return (
    <TextInput
      name="search"
      label={text('Label', 'Search')}
      error={text('Error', '')}
      placeholder={text('Placeholder', 'Search...')}
      disabled={boolean('Disabled', false)}
    />
  )
}

export const disabled = () => {
  return <TextInput {...defaultProps} disabled />
}

export const error = () => {
  return <TextInput {...defaultProps} required error="Something went wrong!" />
}
