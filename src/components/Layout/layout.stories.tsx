import React, { SFC } from 'react'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

// import Header from './header'
import Tab from './core-tab'
// import { OutlineButton } from '../Buttons'
import { Variant, Size } from '@types'

export default {
  title: 'Layout',
}

export const tabs = () => {
  const props = {
    variant: select('Variant', Variant, Variant.Primary),
  }
  return (
    <>
      <Tab isActive {...props}>
        About
      </Tab>
      <Tab {...props}>Contact</Tab>
      <Tab {...props}>Events</Tab>
    </>
  )
}

// export const header = () => {
//   return (
//     <Header>
//       <p>Header?</p>
//     </Header>
//   )
// }
