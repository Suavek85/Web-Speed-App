import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from "@storybook/addon-knobs"
import MainScoreUI from './MainScoreUI'
import { appStates } from '../../../constants/states'

const stories = storiesOf('SVGs', module)
stories.addDecorator(withKnobs)
const app = select('Spinner states', appStates, Object.values(appStates)[0], 'Props')

stories.add('WebOptimize svg', () => {
  return <MainScoreUI  getAppState={ app } />
})