import React from 'react'
import ReactTooltip from "react-tooltip"
import classNames from 'classnames/bind'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from "react-redux"
import { appStates } from '../../constants/states'
import { desktopWidth } from'../../scss/mediaqueries'
import SkeletonCircle from '../Skeleton/SkeletonCircle'
import InfoCircle from '../svgs/InfoCircle/InfoCircle'
import SkeletonText from '../Skeleton/SkeletonText'
import LightBulbUI from '../svgs/LightBulb/LightBulbUI'
import ScoreCircle from '../svgs/ScoreCircle/ScoreCircle'
import styles from './SideCard.scss'


export default function Section(props) {

  const { content, data, position } = props
  const { header, mainContent, result } = content 

  const getAppState = useSelector(state => state.stateReducer.getAppState)
  const loadingStatus = getAppState === appStates.LOADING
  const isDesktop = useMediaQuery(desktopWidth)

  //STYLES
  const cx = classNames.bind(styles)
  const getClass = cx({
    block: true,
    blockGeneric: position === 'generic',
    blockTop: position === 'top',
    blockBottom: position === 'bottom',
  })

  const getColorClass = arg => cx({
    blockContentAlert: arg === 'SLOW',
    blockContentInfo: arg === 'FAST',
    blockContentWarning: arg === 'AVERAGE',
  })

  const getDescrptionWrapperClass = cx({
    blockDesc: true,
    blockGenericDesc: position === 'generic',
    blockResultDesc: position !== 'generic',
  })
  

  // GENERIC ELEMENTS
  const genericPara = () => result.map((el, i) => (
    <p key={i}>{el}
      <span style={{ marginLeft:'5px' }}>
        { loadingStatus? <SkeletonText /> : data && (
          <span className={ getColorClass(data[i]) } >{ data[i] }</span>
        )}
      </span> 
    </p>
  ))

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

  const scorePara = data => (
    <p>
      Score: 
      <span>
        <ScoreCircle score={data[0]} />
      </span>
    </p>
  )
  
  const scoreParaLoading = (
    <p className={scorePara}>
      Score: 
      <span>
        <SkeletonCircle />
      </span>
    </p>
  )
  
  const isGenericPosition = position === 'generic'

  return (
    <div className={ getClass } >
      { isDesktop && isGenericPosition && <LightBulbUI /> }
      <div className={ styles.blockContent }>
        <div className={ getDescrptionWrapperClass }>
          <h2>{ header }</h2>
          { description }
        </div>
        { isGenericPosition && genericPara() }
        { !isGenericPosition && !loadingStatus && data && scorePara(data) }
        { !isGenericPosition && loadingStatus && scoreParaLoading }
      </div>
    </div>
  )
}
