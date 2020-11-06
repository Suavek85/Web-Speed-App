import React from 'react'
import { useDispatch } from "react-redux"
import { navigationStates } from '../../../../constants/navigationStates'
import styles from './NavOpenLink.scss'

export default function NavOpenLink(props) {

  const dispatch = useDispatch()
  const handleExpandMenu = () => dispatch({ type: navigationStates.EXPAND })

  const { settings } = props

  return (
    <div id='buttonwrapper' className={ styles.block } onClick={ handleExpandMenu }>
      { settings }
    </div>
  )
}