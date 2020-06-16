import React from 'react'
import PropTypes from 'prop-types'
import styles from './LighthouseTabContent.scss'
import * as content from '../../../../constants/lighthouseTabAllContent'
import ScoreCircle from '../../../svgs/ScoreCircle/ScoreCircle'

export default function LighthouseTabContent(props) {
  const { activeTabTitle, activeTabDesc, score } = props
  return (
    <div className={ styles.blockResults }>
      <p><span>{ content.TITLE }</span> { activeTabTitle }</p>
      <p><span>{ content.DESCRIPTION }</span> { activeTabDesc }</p>
      { score && <p style={{ display: 'flex', alignItems: 'center'}}>
        <span>{ content.SCORE }</span> 
        <ScoreCircle score={score} /> 
      </p> }
    </div>
  )
}

LighthouseTabContent.propTypes = {
  activeTabTitle: PropTypes.string,
  activeTabDesc: PropTypes.string,
  score: PropTypes.string,
}