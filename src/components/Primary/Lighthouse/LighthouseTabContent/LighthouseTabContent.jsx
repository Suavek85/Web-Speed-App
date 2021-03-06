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
      <div style={{display: 'flex'}}>
        <h2>{ activeTabTitle }</h2>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span>
            <InfoCircle mainContent={'lighthouse-tab-title'} />
          </span>
          <ReactTooltip id='lighthouse-tab-title' data-type="info">
            { activeTabDesc }
          </ReactTooltip> 
        </div>
      </div>

      { !score && loadingStatus && ( 
        <div>
          <span>Score: </span> 
          <SkeletonCircle />
        </div>
      )}
      { score && (
        <div>
          <span>Score: </span> 
          <ScoreCircle score={score} /> 
        </div> 
      )}
    </div>
  )
}

LighthouseTabContent.propTypes = {
  activeTabTitle: PropTypes.string,
  activeTabDesc: PropTypes.string,
  score: PropTypes.number,
}