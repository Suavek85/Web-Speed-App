import React from 'react'
import { useSelector } from "react-redux"
import SideCard from '../SideCard'
import {  RESULT } from '../../../constants/content.js'

export default function Top() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: 'DOM size',
    mainContent: 'A large DOM will increase memory usage, cause longer style calculations.',
    result: [RESULT],
  }

  const data = getDataState? [getDataState[0]] : null
  const position = 'top'
  const props = { content, data, position }

  return (
    <SideCard {...props} />
  )
}
