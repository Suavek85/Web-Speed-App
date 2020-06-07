import React from 'react'
import { useSelector } from "react-redux"

import Section from '../Section'
import { RESULT } from '../../../constants/content.js'

export default function Main() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: 'Generic info',
    mainContent: 'Lorem ipsum ',
    result: 'Page overall category:'
  }

  const data = getDataState[3]
  const position = 'generic'
  const props = { content, data, position }

  return (
    <Section {...props} />
  )
}
