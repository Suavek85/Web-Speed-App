import React from 'react'
import { useDispatch } from "react-redux"
//INTERNAL
import { navigationStates } from '../../../constants/navigationStates'

function OpenButton() {
  const dispatch = useDispatch()
  const handleExpandMenu = () => dispatch({ type: navigationStates.EXPAND })
  return <button onClick={handleExpandMenu}>Open Menu</button>
}

export default OpenButton