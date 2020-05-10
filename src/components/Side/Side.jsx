import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import Top from './Top/Top'
import Bottom from './Bottom/Bottom'
import { tabletWidth, mobileWidth } from'../../scss/mediaqueries'
import styles from './Side.scss'

export default function Side() {

  //STYLES
  let cx = classNames.bind(styles)
  let getClass = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
    blockMobile: useMediaQuery(mobileWidth),
  })

  return (
    <div className={ getClass } >
      <Top />
      <Bottom />
    </div>
  )
}