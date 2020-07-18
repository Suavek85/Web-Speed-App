import React from 'react'
import { useSelector } from "react-redux"
import SideCard from '../SideCard'

export default function Main() {

  const getDataState = useSelector(state => state.stateReducer.getData)

  const content = {
    header: 'Generic info',
    mainContent: 'Page overall information ',
    result: ['Page overall category: ', 'First Contentful Paint: ', 'First Input Delay: ']
  }

  const data = [getDataState[3], getDataState[4], getDataState[5]]
  const position = 'generic'
  const props = { content, data, position }

  return (
    <SideCard {...props} />
  )
}
