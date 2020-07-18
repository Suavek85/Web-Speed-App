import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import InputWrapper from './Input/InputWrapper'
import LighthouseWrapper from './Lighthouse/LighthouseWrapper'
import { tabletWidth } from'../../scss/mediaqueries'
import styles from './Primary.scss'

export default function Primary() {

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
  })

  return (
    <div className={ getClass } >
      <div className={ styles.blockInput } >
        <InputWrapper />
      </div>     
      <LighthouseWrapper />
    </div>
    
  )
}
