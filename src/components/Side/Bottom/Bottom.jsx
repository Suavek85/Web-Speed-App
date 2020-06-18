import React from 'react'
import { useSelector } from "react-redux"

import Section from '../Section'
import { RESULT } from '../../../constants/content.js'

export default function Bottom() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: 'Unused CSS',
    mainContent: 'Remove unused JavaScript to reduce bytes consumed by network activity.',
    result: [RESULT],
  }

  const data = [getDataState[6]]
  const position = 'middle'
  const props = { content, data, position }

  return (
    <Section {...props} />
  )
}

