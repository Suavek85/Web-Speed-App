import React from 'react'
import { Link } from 'react-router-dom'

import OpenButton from '../../Navigation/Buttons/OpenButton'
import { APPTITLE } from '../../../constants/content'
import styles from './Header.scss'

export default function Header() {
  return (
    <div className={styles.headerWrapper} >
      <Link to="/" style={{ textDecoration: 'none' }}><h1>{APPTITLE}</h1></Link>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Link to="/signin" style={{ textDecoration: 'none' }} >
          <h1>Sign in</h1>
        </Link>
        <OpenButton />
      </div> 
    </div>
  )
}