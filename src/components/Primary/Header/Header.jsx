import React from 'react'

import OpenButton from '../../Navigation/Buttons/OpenButton'
import { APPTITLE } from '../../../constants/content'
import styles from './Header.scss'

export default function Header() {
  return (
    <div className={styles.headerWrapper} >
      <OpenButton />
      <h1>{APPTITLE}</h1>
    </div>
  )
}