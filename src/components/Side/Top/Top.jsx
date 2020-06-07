import React from 'react'
import { useSelector } from "react-redux"

import Section from '../Section'
import { FIRST_PAINT_HEADER, FIRST_PAINT_CONTENT, RESULT } from '../../../constants/content.js'

export default function Top() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: FIRST_PAINT_HEADER,
    mainContent: FIRST_PAINT_CONTENT,
    result: RESULT,
  }

  const data = getDataState[0]
  const position = 'top'
  const props = { content, data, position }

  return (
    <Section {...props} />
  )
}
