import React from 'react'
import { useDispatch } from "react-redux"

import { navigationStates } from '../../../constants/navigationStates'
import styles from './OpenButton.scss'

export default function OpenButton() {

  const dispatch = useDispatch()
  const handleExpandMenu = () => dispatch({ type: navigationStates.EXPAND })

  return (
    <div id='buttonwrapper' className={ styles.blockWrapper } onClick={ handleExpandMenu }>
      <div className={ styles.blockBar }></div>
      <div className={ styles.blockBar }></div>
      <div className={ styles.blockBar }></div>
    </div>
  )
}