import React from 'react'
import ReactTooltip from "react-tooltip"
import classNames from 'classnames/bind'
import { useSelector } from "react-redux"
import { appStates } from '../../constants/states'

import SkeletonCircle from '../Skeleton/SkeletonCircle'
import InfoCircle from '../svgs/InfoCircle/InfoCircle'
import SkeletonText from '../Skeleton/SkeletonText'
import LightBulbUI from '../svgs/LightBulb/LightBulbUI'
import ScoreCircle from '../svgs/ScoreCircle/ScoreCircle'
import styles from './Section.scss'


export default function Section(props) {

  const { content, data, position } = props
  const { header, mainContent, result } = content 

  const getAppState = useSelector(state => state.stateReducer.getAppState)
  const loadingStatus = getAppState === appStates.LOADING

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

  const getDescrptionWrapperClass = cx({
    blockDesc: true,
    blockGenericDesc: position === 'generic',
    blockResultDesc: position !== 'generic',
  })
  
  const style = position !== 'generic'? { 
    display: 'flex', alignItems: 'flex-end', flexDirection: 'row' 
  } : { 
    display: 'flex', alignItems: 'flex-start', flexDirection: 'column' 
  }


  // GENERIC ELEMENTS

  const lightBulbWrapper = (
    <span className={ styles.blockLightbulb } >
      <LightBulbUI />
    </span>
  )

  const genericDescription = (
    <p>
      { mainContent }
    </p>
  )

  const genericPara = (el, index) => (
    <p key={index}>{ result[index]  } 
      <span className={ getColorClass(el)}>
        { el !== '?' && el }
        { el === '?' && loadingStatus && <SkeletonText />}
      </span>
    </p>
  )

  //RESULTS ELEMENTS

  const description = (
    <>
      <span style={{marginLeft: '7px'}}>
        <InfoCircle mainContent={mainContent} />
      </span>
      <ReactTooltip id={ mainContent } type='info'>
        <span>{ mainContent }</span>
      </ReactTooltip>
    </>
  )

  const scorePara = (el, index) => { 
    return el !== '?' && !loadingStatus && (
      <p className={scorePara} key={index}>
        Score: 
        <span>
          <ScoreCircle score={el} />
        </span>
      </p>
    )
  }

  const scoreParaLoading = (el, index) => { 
    return el === '?' && loadingStatus && (
      <p className={scorePara} key={index}>
        Score: 
        <span>
          <SkeletonCircle />
        </span>
      </p>
    )
  }

  return (
    <div className={ getClass } >
      <div className={ styles.contentWrapper }>
        <div className={ getDescrptionWrapperClass }>
          <h2>
            { header }
            { position === 'generic' && lightBulbWrapper }
          </h2>
          { position === 'generic' && genericDescription }
          { position !== 'generic' && description}
        </div>
        { position === 'generic' && data.map(genericPara) }
        { position !== 'generic' && data.map(scorePara) }
        { position !== 'generic' && data.map(scoreParaLoading) }
      </div>
    </div>
  )
}
