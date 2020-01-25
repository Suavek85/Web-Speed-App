import React from 'react'
import { storiesOf } from '@storybook/react'
import InputUrl from './InputUrl'

const stories = storiesOf('UI Components', module)

stories.add('Input Url', () => {
  return <InputUrl />
})