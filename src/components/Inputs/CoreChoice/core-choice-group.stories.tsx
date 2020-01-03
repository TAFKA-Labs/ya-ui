import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import {
  text,
  boolean,
  number,
  optionsKnob as options,
  select,
} from '@storybook/addon-knobs'

import ChoiceGroup from './core-choice-group'
import ChoiceOption from './core-choice-option'

export default {
  title: 'Inputs/ChoiceGroup',
}

export const playground = () => {
  return (
    <ChoiceGroup legend="Choose a pet" name="monster">
      <ChoiceOption id="kraken">Kraken</ChoiceOption>
      <ChoiceOption id="sasquatch">Sasquatch</ChoiceOption>
      <ChoiceOption id="mothman">Mothman</ChoiceOption>
    </ChoiceGroup>
  )
}

export const error = () => {
  return (
    <ChoiceGroup legend="Choose a pet" name="monster" error="Required!">
      <ChoiceOption id="kraken">Kraken</ChoiceOption>
      <ChoiceOption id="sasquatch">Sasquatch</ChoiceOption>
      <ChoiceOption id="mothman">Mothman</ChoiceOption>
    </ChoiceGroup>
  )
}

export const disabled = () => {
  return (
    <ChoiceGroup legend="Choose a pet" name="monster" disabled>
      <ChoiceOption id="kraken">Kraken</ChoiceOption>
      <ChoiceOption id="sasquatch">Sasquatch</ChoiceOption>
      <ChoiceOption id="mothman">Mothman</ChoiceOption>
    </ChoiceGroup>
  )
}

export const vertical = () => {
  return (
    <ChoiceGroup vertical legend="Choose a pet" name="monster">
      <ChoiceOption id="kraken">Kraken</ChoiceOption>
      <ChoiceOption id="sasquatch">Sasquatch</ChoiceOption>
      <ChoiceOption id="mothman">Mothman</ChoiceOption>
    </ChoiceGroup>
  )
}

export const checkbox = () => {
  return (
    <ChoiceGroup legend="Choose a pet" name="monster">
      <ChoiceOption type="checkbox" id="kraken">
        Kraken
      </ChoiceOption>
      <ChoiceOption type="checkbox" id="sasquatch">
        Sasquatch
      </ChoiceOption>
      <ChoiceOption type="checkbox" id="mothman">
        Mothman
      </ChoiceOption>
    </ChoiceGroup>
  )
}
