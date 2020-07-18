import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from "react-tooltip"
import SkeletonCircle from '../../../Skeleton/SkeletonCircle'
import InfoCircle from '../../../svgs/InfoCircle/InfoCircle'
import styles from './LighthouseTabContent.scss'
import ScoreCircle from '../../../svgs/ScoreCircle/ScoreCircle'
import { useSelector } from "react-redux"
import { appStates } from '../../../../constants/states'

export default function LighthouseTabContent(props) {

  const { activeTabTitle, activeTabDesc, score } = props

  const getAppState = useSelector(state => state.stateReducer.getAppState)
  const loadingStatus = getAppState === appStates.LOADING

  return (
    <div className={ styles.block }>
      <p>
        <span>{ activeTabTitle }</span>
        <span>
          <InfoCircle mainContent={'lighthouse-tab-title'} />
        </span>
        <ReactTooltip id='lighthouse-tab-title' data-type="warning">
          { activeTabDesc }
        </ReactTooltip> 
      </p>
      { !score && loadingStatus && ( 
        <p>
          <span>Score: </span> 
          <SkeletonCircle />
        </p>
      )}
      { score && (
        <p>
          <span>Score: </span> 
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