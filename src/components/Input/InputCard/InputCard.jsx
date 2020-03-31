import React from 'react'

import InputUrl from '../InputUrl'
import InputButtonWrapper from '../InputButton/InputButtonWrapper'
import SpinnerWrapper from '../Spinner/SpinnerWrapper'
import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import OpenButton from '../../Navigation/Buttons/OpenButton'
import Lighthouse from '../../Results/Lighthouse/Lighthouse'
import { APPTITLE } from '../../../constants/content'
import './InputCard.scss'
import styles from './InputCard.scss'

export default function InputCard() {

  return (
    <div className={styles.block} >
      <div className={styles.blockInner} >
        <div className={styles.subWrapper} >
          <div className={styles.headerWrapper} >
            <OpenButton />
            <h1>{APPTITLE}</h1>
          </div>
          <div style={{display: 'flex', margin: '30px 0px'}}>
            <InputUrl />
            <div className={styles.btnWrapper}>
              <InputButtonWrapper />
              <SpinnerWrapper />
            </div>
          </div>
        </div>     
      </div>
      <Lighthouse />
    </div>
  )
}
