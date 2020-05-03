import React from 'react'
import PropTypes from 'prop-types'
import styles from './Lighthouse.scss'

export default function LighthouseTabContent(props) {
  const { activeTabTitle, activeTabDesc, scorePercentage, displayValuePercentage } = props
  return (
    <div className={ styles.blockResults }>
      <p><span>Title:</span> { activeTabTitle }</p>
      <p><span>Description:</span> { activeTabDesc }</p>
      <p><span>Score:</span> { scorePercentage } </p>
      <p><span>Display Value:</span> { displayValuePercentage } </p>
    </div>
  )
}

LighthouseTabContent.propTypes = {
  activeTabTitle: PropTypes.string,
  activeTabDesc: PropTypes.string,
  scorePercentage: PropTypes.string,
  displayValuePercentage: PropTypes.string,
}