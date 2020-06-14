import React from 'react'
import { useSelector } from "react-redux"

import Section from '../Section'
import { RESULT } from '../../../constants/content.js'

export default function Bottom() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: 'Unused Javascript',
    mainContent: 'Remove unused JavaScript to reduce bytes consumed by network activity.',
    result: [RESULT],
  }

  const data = [getDataState[1]]
  const position = 'bottom'
  const props = { content, data, position }


  return (
    <Section {...props} />
  )
}
