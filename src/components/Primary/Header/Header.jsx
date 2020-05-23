import React from 'react'
import { Link } from 'react-router-dom'

import NavOpenLink from '../../Navigation/NavOpenLink/NavOpenLink'
import { APPTITLE, SIGN_IN } from '../../../constants/content'
import styles from './Header.scss'

export default function Header() {
  return (
    <div className={ styles.block } >
      <Link to="/" className={ styles.blockTitle }>
        <h1>{ APPTITLE }</h1>
      </Link>
      <div className={ styles.blockLinks }>
        <Link to="/signin" className={ styles.blockTitle } >
          <h2>{ SIGN_IN }</h2>
        </Link>
        <NavOpenLink />
      </div> 
    </div>
  )
}