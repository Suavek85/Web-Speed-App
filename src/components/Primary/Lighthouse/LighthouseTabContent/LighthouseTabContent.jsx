import React from 'react'
import PropTypes from 'prop-types'
import SkeletonCircle from '../../../Skeleton/SkeletonCircle'
import styles from './LighthouseTabContent.scss'
import * as content from '../../../../constants/lighthouseTabAllContent'
import ScoreCircle from '../../../svgs/ScoreCircle/ScoreCircle'
import { useSelector } from "react-redux"
import { appStates } from '../../../../constants/states'

export default function LighthouseTabContent(props) {

  const { activeTabTitle, activeTabDesc, score } = props

  const getAppState = useSelector(state => state.stateReducer.getAppState)
  const loadingStatus = getAppState === appStates.LOADING

  return (
    <div className={ styles.blockResults }>
      <p><span>{ content.TITLE }</span> { activeTabTitle }</p>
      <p><span>{ content.DESCRIPTION }</span> { activeTabDesc }</p>
      { !score && loadingStatus && ( 
        <p style={{ display: 'flex', alignItems: 'center'}}>
          <span>{ content.SCORE }</span> 
          <SkeletonCircle />
        </p>
      )}
      { score && (
        <p style={{ display: 'flex', alignItems: 'center'}}>
          <span>{ content.SCORE }</span> 
          <ScoreCircle score={score} /> 
        </p> 
      )}
    </div>
  )
}

LighthouseTabContent.propTypes = {
  activeTabTitle: PropTypes.string,
  activeTabDesc: PropTypes.string,
  score: PropTypes.string,
}