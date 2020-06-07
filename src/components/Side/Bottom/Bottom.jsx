import React from 'react'
import { useSelector } from "react-redux"

import Section from '../Section'
import { FIRST_INPUT_DELAY_HEADER, FIRST_INPUT_DELAY_CONTENT, RESULT } from '../../../constants/content.js'

export default function Bottom() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: FIRST_INPUT_DELAY_HEADER,
    mainContent: FIRST_INPUT_DELAY_CONTENT,
    result: RESULT,
  }

  const data = getDataState[1]
  const position = 'bottom'
  const props = { content, data, position }


  return (
    <Section {...props} />
  )
}
