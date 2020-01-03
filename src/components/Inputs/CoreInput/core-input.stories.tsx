import React, { SFC } from 'react'
import { action } from '@storybook/addon-actions'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import CoreInput from './core-input'

export default {
  title: 'Inputs/CoreInput',
}

const defaultProps = {
  name: 'search',
  placeholder: 'Search...',
}

export const playground = () => {
  return (
    <CoreInput
      name="search"
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', 'Search...')}
    />
  )
}

export const disabled = () => {
  return <CoreInput {...defaultProps} disabled />
}
