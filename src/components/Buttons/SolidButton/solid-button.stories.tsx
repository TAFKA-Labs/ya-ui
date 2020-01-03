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
import SolidButton from './solid-button'

export default {
  title: 'Buttons/SolidButton',
}

const defaultProps = {
  onClick: () => {},
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
    <SolidButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
      variant={select('Variant', Variant, Variant.Primary)}
      size={select('Size', sizeOptions, sizeOptions['Medium'])}
    >
      Hello
    </SolidButton>
  )
}

export const disabled = () => {
  return (
    <SolidButton {...defaultProps} disabled>
      Hello
    </SolidButton>
  )
}

export const sizes = () => {
  return (
    <>
      <SolidButton {...defaultProps} size={Size.S}>
        Hello
      </SolidButton>
      <SolidButton {...defaultProps}>Hello</SolidButton>
      <SolidButton {...defaultProps} size={Size.L}>
        Hello
      </SolidButton>
    </>
  )
}
