import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from "@storybook/addon-knobs"
import InputButton from './InputButton'
import { appStates } from '../../../constants/states'


const stories = storiesOf('UI Components', module)

stories.addDecorator(withKnobs)

stories.add('Input Button', () => {
  const groupId = 'Props'
  const statusesKnob = select('Button states', appStates, Object.values(appStates)[0], groupId)
  return <InputButton getAppState={statusesKnob} />
})