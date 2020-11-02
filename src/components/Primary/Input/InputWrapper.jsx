import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import InputUrlUI from './InputUrl/InputUrlUI'
import InputButtonWrapper from './InputButton/InputButtonWrapper'
import Error from '../Error/Error'
import styles from './Input.scss'
import { mobileWidth } from'../../../scss/mediaqueries'

export default function InputWrapper() {

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockMobile: useMediaQuery(mobileWidth),
  })

  return (
    <div className={getClass}>
      <InputUrlUI/>
      <div className={styles.btnWrapper}>
        <InputButtonWrapper />
      </div>
      <Error />
    </div>
  )
}