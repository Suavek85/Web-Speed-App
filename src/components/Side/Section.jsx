import React from 'react'
import classNames from 'classnames/bind'

import LightBulbUI from '../svgs/LightBulb/LightBulbUI'
import styles from './Section.scss'

export default function Section(props) {

  const { content, data, position } = props
  const { header, mainContent, result } = content

  //STYLES
  let cx = classNames.bind(styles)
  let getClass = cx({
    blockWrapper: true,
    blockGeneric: position === 'generic',
    blockTop: position === 'top',
    blockBottom: position === 'bottom',
  })

  return (
    <div className={ getClass } >
      <div className={ styles.contentWrapper }>
        <h2>
          { header }
          <LightBulbUI />
        </h2>
        <p>
          { mainContent }
        </p>
        <p>
          { result }
          <span>
            { data }
          </span>
        </p>
      </div>
    </div>
  )
}
