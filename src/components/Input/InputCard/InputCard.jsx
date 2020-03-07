import React from 'react'

import InputUrl from '../InputUrl/InputUrl'
import InputButtonWrapper from '../InputButton/InputButtonWrapper'
import SpinnerWrapper from '../Spinner/SpinnerWrapper'
import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import OpenButton from '../../Navigation/Buttons/OpenButton'
import { APPTITLE } from '../../../constants/content'
import './InputCard.scss'
import styles from './InputCard.scss'

export default function InputCard() {

  return (
    <div className={styles.block} >
      <div className={styles.subWrapper} >
        <div className={styles.headerWrapper} >
          <OpenButton />
          <h1>{APPTITLE}</h1>
        </div>
        <InputUrl />
        <div className={styles.btnWrapper}>
          <InputButtonWrapper />
          <SpinnerWrapper />
        </div>
      </div>
      <WebOptimizeWrapper />
    </div>
  )
}
