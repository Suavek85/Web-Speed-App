import React from 'react'
import { Link } from 'react-router-dom'

import NavOpenLink from '../../Navigation/NavOpenLink/NavOpenLink'
import { APPTITLE, SIGN_IN } from '../../../constants/content'
import styles from './Header.scss'

export default function Header() {
  return (
    <div className={ styles.headerWrapper } >
      <Link to="/" className={ styles.titleWrapper }>
        <h1>{ APPTITLE }</h1>
      </Link>
      <div className={ styles.linksWrapper }>
        <Link to="/signin" className={ styles.titleWrapper } >
          <h2>{ SIGN_IN }</h2>
        </Link>
        <NavOpenLink />
      </div> 
    </div>
  )
}