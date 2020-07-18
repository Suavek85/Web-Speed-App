import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import { tabletWidth } from'../../scss/mediaqueries'
import MainNavigation from '../Navigation/Main/MainNavigation'
import Primary from '../Primary/Primary'
import Side from '../Side/Side'
import Navigation from '../Navigation/Side/Navigation'
import styles from './Homepage.scss'

export default function Homepage() {

  //STYLES
  const cx = classNames.bind(styles)
  const getButtonClasses = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
  })

  return (
    <section style={{display: 'flex', flexDirection: 'column'}}>
      <Navigation />
      <MainNavigation />
      <div className={ getButtonClasses }>
        <Primary />
        <Side />
      </div>

    </section>
  )
}

