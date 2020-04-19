import React from 'react'
import { storiesOf } from '@storybook/react'
import InputUrlUI from './InputUrlUI'

const stories = storiesOf('UI Components', module)

stories.add('Input Url', () => {
  return <InputUrlUI />
})