import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from "@storybook/addon-knobs"
import WebOptimizeUI from './WebOptimizeUI'
import { appStates } from '../../constants/states'

const stories = storiesOf('SVGs', module)
stories.addDecorator(withKnobs)

stories.add('WebOptimize svg', () => {
  return <WebOptimizeUI  getAppState={select('Spinner states', appStates, Object.values(appStates)[0], 'Props')} />
})