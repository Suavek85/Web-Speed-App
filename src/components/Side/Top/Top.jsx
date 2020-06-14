import React from 'react'
import { useSelector } from "react-redux"

import Section from '../Section'
import {  RESULT } from '../../../constants/content.js'

export default function Top() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: 'DOM size',
    mainContent: 'A large DOM will increase memory usage, cause longer style calculations.',
    result: [RESULT],
  }

  const data = [getDataState[0]]
  const position = 'top'
  const props = { content, data, position }

  return (
    <Section {...props} />
  )
}
