import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import InputUrlWrapper from './InputUrl/InputUrlWrapper'
import InputButtonWrapper from './InputButton/InputButtonWrapper'
import styles from './Input.scss'
import { smallMobileWidth } from'../../../scss/mediaqueries'

export default function InputWrapper() {

   //STYLES
   const cx = classNames.bind(styles)
   const getClass = cx({
    block: true,
    blockSmallMobile: useMediaQuery(smallMobileWidth),
   })

  return (
    <div className={getClass}>
      <InputUrlWrapper />
      <div className={styles.btnWrapper}>
        <InputButtonWrapper />
      </div>
    </div>
  )
}