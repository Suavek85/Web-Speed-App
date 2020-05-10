import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import InputWrapper from './Input/InputWrapper'
import Header from './Header/Header'
import LighthouseWrapper from './Lighthouse/LighthouseWrapper'
import { tabletWidth } from'../../scss/mediaqueries'
import styles from './PrimaryCard.scss'

export default function PrimaryCard() {

  //STYLES
  let cx = classNames.bind(styles)
  let getClass = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
  })

  return (
    <div className={getClass} >
      <div className={styles.headerInputWrapper} >
        <Header />
        <InputWrapper />
      </div>     
      <LighthouseWrapper />
    </div>
  )
}
