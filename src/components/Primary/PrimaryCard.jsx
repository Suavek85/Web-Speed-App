import React from 'react'

import InputUrlWrapper from './InputUrl/InputUrlWrapper'
import InputButtonWrapper from './InputButton/InputButtonWrapper'
import SpinnerWrapper from './Spinner/SpinnerWrapper'
import OpenButton from '../Navigation/Buttons/OpenButton'
import Lighthouse from './Lighthouse/Lighthouse'
import { APPTITLE } from '../../constants/content'
import './PrimaryCard.scss'
import styles from './PrimaryCard.scss'

export default function PrimaryCard() {

  return (
    <div className={styles.block} >
      <div className={styles.blockInner} >
        <div className={styles.subWrapper} >
          <div className={styles.headerWrapper} >
            <OpenButton />
            <h1>{APPTITLE}</h1>
          </div>
          <div style={{display: 'flex', margin: '30px 0px'}}>
            <InputUrlWrapper />
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
