import React from 'react'
import { useDispatch } from "react-redux"

import { navigationStates } from '../../../constants/navigationStates'
import './OpenButton.scss'

function OpenButton() {
  const dispatch = useDispatch()
  const handleExpandMenu = () => dispatch({ type: navigationStates.EXPAND })
  return (
    <div className='button__wrapper' onClick={handleExpandMenu}>
      <div className='button__bar'></div>
      <div className='button__bar'></div>
      <div className='button__bar'></div>
    </div>
  )
}

export default OpenButton