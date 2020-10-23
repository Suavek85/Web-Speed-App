import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from "@storybook/addon-knobs"

import SpinnerUI from './SpinnerUI'
import { appStates } from '../../../constants/states'

const stories = storiesOf('UI Components', module)

stories.addDecorator(withKnobs)

stories.add('Spinner', () => {
  const groupId = 'Props'
  const statusesKnob = select('Spinner states', appStates, Object.values(appStates)[0], groupId)
  return <SpinnerUI getAppState={statusesKnob} />
})