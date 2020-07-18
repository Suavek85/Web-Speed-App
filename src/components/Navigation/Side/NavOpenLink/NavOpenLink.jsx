import React from 'react'
import { useDispatch } from "react-redux"

import { navigationStates } from '../../../../constants/navigationStates'
import { SETTINGS } from '../../../../constants/content'
import styles from './NavOpenLink.scss'

export default function NavOpenLink() {

  const dispatch = useDispatch()
  const handleExpandMenu = () => dispatch({ type: navigationStates.EXPAND })

  return (
    <div id='buttonwrapper' className={ styles.block } onClick={ handleExpandMenu }>
      <h2> { SETTINGS } </h2>
    </div>
  )
}