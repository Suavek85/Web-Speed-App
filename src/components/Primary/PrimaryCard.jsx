import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import InputUrlWrapper from './InputUrl/InputUrlWrapper'
import InputButtonWrapper from './InputButton/InputButtonWrapper'
import OpenButton from '../Navigation/Buttons/OpenButton'
import Lighthouse from './Lighthouse/Lighthouse'
import { APPTITLE } from '../../constants/content'
import { tabletWidth } from'../../scss/mediaqueries'
import './PrimaryCard.scss'
import styles from './PrimaryCard.scss'

export default function PrimaryCard() {

  //STYLES
  let cx = classNames.bind(styles)
  let getClass = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
  })

  return (
    <div className={ getClass } >
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
            </div>
          </div>
        </div>     
      </div>
      <Lighthouse />
    </div>
  )
}
