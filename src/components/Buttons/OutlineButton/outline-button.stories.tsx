import React, { SFC } from 'react'
import { action } from '@storybook/addon-actions'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import { Variant, Size } from '@types'
import OutlineButton from './outline-button'

export default {
  title: 'Buttons/OutlineButton',
}

const defaultProps = {
  onClick: () => {},
  label: 'Submit',
  variant: Variant.Primary,
  size: Size.M,
}

const sizeOptions = {
  Small: 0,
  Medium: 1,
  Large: 2,
}

export const playground = () => {
  return (
    <OutlineButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
      variant={select('Variant', Variant, Variant.Primary)}
      size={select('Size', sizeOptions, sizeOptions['Medium'])}
    >
      Hello
    </OutlineButton>
  )
}

export const disabled = () => {
  return (
    <OutlineButton {...defaultProps} disabled>
      Hello
    </OutlineButton>
  )
}

export const sizes = () => {
  return (
    <>
      <OutlineButton {...defaultProps} size={Size.S}>
        Hello
      </OutlineButton>
      <OutlineButton {...defaultProps}>Hello</OutlineButton>
      <OutlineButton {...defaultProps} size={Size.L}>
        Hello
      </OutlineButton>
    </>
  )
}
