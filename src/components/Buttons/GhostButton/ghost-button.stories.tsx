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
import GhostButton from './ghost-button'

export default {
  title: 'Buttons/GhostButton',
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
    <GhostButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
      variant={select('Variant', Variant, Variant.Primary)}
      size={select('Size', sizeOptions, sizeOptions['Medium'])}
    >
      Hello
    </GhostButton>
  )
}

export const disabled = () => {
  return (
    <GhostButton {...defaultProps} disabled>
      Hello
    </GhostButton>
  )
}

export const sizes = () => {
  return (
    <>
      <GhostButton {...defaultProps} size={Size.S}>
        Hello
      </GhostButton>
      <GhostButton {...defaultProps}>Hello</GhostButton>
      <GhostButton {...defaultProps} size={Size.L}>
        Hello
      </GhostButton>
    </>
  )
}
