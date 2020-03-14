import React from 'react'
import InputCard from '../src/components/Input/InputCard'
import Results from '../src/components/Results/Results'
import Navigation from '../src/components/Navigation/Navigation'
import styles from './App.scss'

export default function App() {
  return (
    <div className={styles.block}>
      <Navigation />
      <InputCard />
      <Results />
    </div>
  )
}

