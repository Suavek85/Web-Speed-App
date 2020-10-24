import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from "@storybook/addon-knobs"
import ScoreCircle from './ScoreCircle'

const stories = storiesOf('SVGs', module)
stories.addDecorator(withKnobs)

stories.add('Score Circle svg', () => {
  return <ScoreCircle score='0.40' />
})