import React from 'react'
import styles from './Results.scss'
import ResultsTop from './ResultsTop/ResultsTop'
import ResultsBottom from './ResultsBottom/ResultsBottom'

export default function Results() {
  return (
    <div className={ styles.block } >
      <ResultsTop />
      <ResultsBottom />
    </div>
  )
}