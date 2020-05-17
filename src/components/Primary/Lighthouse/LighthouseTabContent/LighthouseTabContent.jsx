import React from 'react'
import PropTypes from 'prop-types'
import styles from './LighthouseTabContent.scss'
import * as content from '../../../../constants/lighthouseTabAllContent'

export default function LighthouseTabContent(props) {
  const { activeTabTitle, activeTabDesc, scorePercentage, displayValuePercentage } = props
  return (
    <div className={ styles.blockResults }>
      <p><span>{ content.TITLE }</span> { activeTabTitle }</p>
      <p><span>{ content.DESCRIPTION }</span> { activeTabDesc }</p>
      <p><span>{ content.SCORE }</span> { scorePercentage } </p>
      <p><span>{ content.DISPLAY_VALUE }</span> { displayValuePercentage } </p>
    </div>
  )
}

LighthouseTabContent.propTypes = {
  activeTabTitle: PropTypes.string,
  activeTabDesc: PropTypes.string,
  scorePercentage: PropTypes.string,
  displayValuePercentage: PropTypes.string,
}