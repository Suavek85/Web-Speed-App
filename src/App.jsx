import React from 'react'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'

import { tabletWidth } from'./scss/mediaqueries'
import PrimaryCard from '../src/components/Primary'
import Side from '../src/components/Side/Side'
import Navigation from '../src/components/Navigation/Navigation'
import styles from './App.scss'

export default function App() {

  //STYLES
  let cx = classNames.bind(styles)
  let getButtonClasses = cx({
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

