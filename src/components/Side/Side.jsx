import React from 'react'
import Top from './Top/Top'
import Bottom from './Bottom/Bottom'
import styles from './Side.scss'

export default function Side() {
  return (
    <div className={ styles.block } >
      <Top />
      <Bottom />
    </div>
  )
}