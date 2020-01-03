import React, { SFC } from 'react'
import { action } from '@storybook/addon-actions'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import { Size } from '@types'
import CoreButton from './core-button'

const defaultProps = {
  onClick: () => {},
  size: Size.M,
}

const sizeOptions = {
  Small: 0,
  Medium: 1,
  Large: 2,
}

const DemoIcon = ({ size = '1em' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M14 2.8l5 2.8a2.1 2.1 0 013.4.4A2.1 2.1 0 0121 9.2v5.7a2.1 2.1 0 011.4 3.1 2.1 2.1 0 01-3.5.4L14 21.2a2.1 2.1 0 11-4 0l-5-2.8a2.1 2.1 0 11-2-3.6V9.2a2.1 2.1 0 112-3.6l5-2.9a2.1 2.1 0 114 0zm-.5.8L19.9 15h.1V9a2.1 2.1 0 01-1.5-2.5v-.1l-5-2.9zm-3 0l-5 2.9c.3 1.1-.3 2.3-1.4 2.6H4V15l6.5-11.2zm2.1.6h-1.2L4.9 15.4c.3.3.5.6.6 1h13c0-.4.3-.7.6-1L12.6 4.2zm1 16.2l4.9-2.8v-.2h-13v.1l5 2.9c.3-.4.9-.7 1.5-.7s1.2.3 1.6.7z"
    />
  </svg>
)

export default {
  title: 'Buttons/CoreButton',
}

export const playground = () => {
  return (
    <CoreButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
      size={select('Size', sizeOptions, sizeOptions['Medium'])}
    >
      Hello
    </CoreButton>
  )
}

export const disabled = () => {
  return (
    <CoreButton {...defaultProps} disabled>
      Hello
    </CoreButton>
  )
}

export const fullWidth = () => {
  return (
    <CoreButton {...defaultProps} fullWidth>
      Hello
    </CoreButton>
  )
}

export const icon = () => {
  return (
    <CoreButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
      size={select('Size', sizeOptions, sizeOptions['Medium'])}
      reverseOrder={boolean('Reverse order', false)}
      icon={<DemoIcon />}
      responsive={select('Responsive', ['always', 'smallOnly'], 'smallOnly')}
    >
      Hello
    </CoreButton>
  )
}

export const sizes = () => {
  return (
    <>
      <CoreButton {...defaultProps} size={Size.S}>
        Hello
      </CoreButton>
      <CoreButton {...defaultProps}>Hello</CoreButton>
      <CoreButton {...defaultProps} size={Size.L}>
        Hello
      </CoreButton>
    </>
  )
}
