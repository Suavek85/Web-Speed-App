import React from 'react'
import PrimaryCard from '../src/components/Primary'
import Side from '../src/components/Side/Side'
import Navigation from '../src/components/Navigation/Navigation'
import styles from './App.scss'

export default function App() {
  return (
    <div className={ styles.block }>
      <Navigation />
      <PrimaryCard />
      <Side />
    </div>
  )
}

