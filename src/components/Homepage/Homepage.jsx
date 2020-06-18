import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import { tabletWidth } from'../../scss/mediaqueries'
import PrimaryCard from '../Primary/PrimaryCard'
import Side from '../Side/Side'
import Navigation from '../Navigation/Navigation'
import styles from './Homepage.scss'

export default function Homepage() {

  //STYLES
  const cx = classNames.bind(styles)
  const getButtonClasses = cx({
    block: true,
    blockTablet: useMediaQuery(tabletWidth),
  })

  return (
    <section className={ getButtonClasses }>
      <Navigation />
      <PrimaryCard />
      <Side />
    </section>
  )
}

