import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from "@storybook/addon-knobs"
import ToggleSwitch from './ToggleSwitch.jsx'

const stories = storiesOf('Toggle', module)
stories.addDecorator(withKnobs)

stories.add('Toggle Switch', () => {
  return <ToggleSwitch  />
})