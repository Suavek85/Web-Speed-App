import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import MainScoreWrapper from '../../../svgs/MainScore/MainScoreWrapper'
import styles from './LighthouseHeader.scss'
import { LIGHTHOUSE_TITLE, PERFORMANCE } from '../../../../constants/content'
import { smallMobileWidth, mobileWidth } from '../../../../scss/mediaqueries'

export default function LighthouseHeader() {

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockSmallMobile: useMediaQuery(smallMobileWidth),
    blockMobile: useMediaQuery(mobileWidth),
  })

  return (
    <div className={ getClass }>
      <MainScoreWrapper />
      <div className={ styles.blockTitleWrapper }>
        <h1 className={ styles.blockTitle }>{ LIGHTHOUSE_TITLE }</h1>
        <h2 className={ styles.blockSubTitle }>{ PERFORMANCE }</h2>
      </div>
    </div>
  )
}

