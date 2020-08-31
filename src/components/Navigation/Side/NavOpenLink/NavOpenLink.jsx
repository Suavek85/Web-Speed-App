import React from 'react'
import { subscriber } from '../../../../reducers/sideNavMessageService'
import { navigationStates } from '../../../../constants/navigationStates'
import { SETTINGS } from '../../../../constants/content'
import styles from './NavOpenLink.scss'

export default function NavOpenLink() {

  const handleExpandMenu = () => subscriber.next(navigationStates.EXPAND)
  return (
    <div id='buttonwrapper' className={ styles.block } onClick={ handleExpandMenu }>
      <h2> { SETTINGS } </h2>
    </div>
  )
}