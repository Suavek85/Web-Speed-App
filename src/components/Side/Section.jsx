import React from 'react'
import classNames from 'classnames/bind'

import LightBulbUI from '../svgs/LightBulb/LightBulbUI'
import ScoreCircle from '../svgs/ScoreCircle/ScoreCircle'
import styles from './Section.scss'

export default function Section(props) {

  const { content, data, position } = props
  const { header, mainContent, result } = content 

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    blockWrapper: true,
    blockGeneric: position === 'generic',
    blockTop: position === 'top',
    blockBottom: position === 'bottom',
  })

  const getColorClass = arg => cx({
    blockAlert: arg === 'SLOW',
    blockInfo: arg === 'FAST',
    blockWarning: arg === 'AVERAGE',
  })

  const genericPara = (el, index) => (<p key={index}>{ result[index]  } <span className={ getColorClass(el)}>{ el !== '?' && el }</span></p>)
  const scorePara = (el, index) => { 
    return el !== '?' && (<p className={scorePara} key={index}>Score: <span><ScoreCircle score={el} /></span></p>)
  }
  const lightBulbWrapper = (<span className={ styles.blockLightbulb } ><LightBulbUI /></span>)

  return (
    <div className={ getClass } >
      <div className={ styles.contentWrapper }>
        <h2>
          { header }
          { position === 'generic' && lightBulbWrapper }
        </h2>
        <p>
          { mainContent }
        </p>
        { position === 'generic' && data.map(genericPara) }
        { position !== 'generic' && data.map(scorePara) }
      </div>
    </div>
  )
}
