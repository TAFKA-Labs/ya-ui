import React, { SFC } from 'react'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import { Variant } from '@types'
import Heading from './heading'
import Paragraph from './paragraph'
import Label from './label'

export default {
  title: 'Typography',
}

// const defaultProps = {
//   level: 1,
//   children: 'Heading',
//   variant: Variant.Primary,
// }

export const heading = () => {
  return (
    <Heading variant={select('Variant', Variant, Variant.Primary)}>
      Heading
    </Heading>
  )
}

export const label = () => {
  return <Label>First name</Label>
}

export const paragraph = () => {
  return (
    <Paragraph variant={select('Variant', Variant, Variant.Black)}>
      Hello
    </Paragraph>
  )
}
