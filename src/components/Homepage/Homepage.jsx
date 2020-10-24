import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import { tabletWidth } from'../../scss/mediaqueries'
import MainNavigation from '../Navigation/Main/MainNavigation'
import Primary from '../Primary/Primary'
import Side from '../Side/Side'
import SideNavigation from '../Navigation/Side/SideNavigation'
import styles from './Homepage.scss'

export default function Homepage() {

  //STYLES
  const cx = classNames.bind(styles)
  const getClasses = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
  })

  return (
    <div className={ styles.blockWrapper }>
      <SideNavigation />
      <MainNavigation />
      <main role='main' className={ getClasses }>
        <Primary />
        <Side />
      </main>
    </div>
  )
}

