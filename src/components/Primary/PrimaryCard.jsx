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
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
  })

  return (
    <div className={ getClass } >
      <Header />
      <div className={ styles.headerInputWrapper } >
        <InputWrapper />
      </div>     
      <LighthouseWrapper />
    </div>
    
  )
}
