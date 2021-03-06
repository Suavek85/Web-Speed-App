import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import Main from './Main/Main'
import Middle from './Middle/Middle'
import Top from './Top/Top'
import Bottom from './Bottom/Bottom'
import { tabletWidth, smallTabletWidth } from'../../scss/mediaqueries'
import styles from './Side.scss'

export default function Side() {

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
    blockSmallTablet: useMediaQuery(smallTabletWidth),
  })

  return (
    <aside className={ getClass } >
      <Main />
      <Top />
      <Middle />
      <Bottom />
    </aside>
  )
}