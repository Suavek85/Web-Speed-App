import React from "react"
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './ScoreCircle.scss'

export default function ScoreCircle(props) {

  const { score } = props
  const scoreCircle = score ? Math.floor(score * 100) : 0
  const strokeValue = `${ scoreCircle }, 100`

  const isAlert = !!(scoreCircle < 50)
  const isWarning = !!(scoreCircle < 90 && scoreCircle > 49)
  const isInfo = !!(scoreCircle > 89)

  //STYLES
  const cx = classNames.bind(styles)

  const getClass = cx({
    blockStats: true,
    blockStatsAlert: isAlert,
    blockStatsWarning: isWarning,
    blockStatsInfo: isInfo
  })

  const getTextClass = cx({
    blockText: true,
    blockTextAlert: isAlert,
    blockTextWarning: isWarning,
    blockTextInfo: isInfo
  })

  const getBgClass = cx({
    blockBg: true,
    blockBgAlert: isAlert,
    blockBgWarning: isWarning,
    blockBgInfo: isInfo
  })

  return (
    <div className={ styles.block }>
      <svg viewBox="0 0 36 36" className={ styles.blockSvg }>
        <path className={ getBgClass }
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path className={ getClass }
          strokeDasharray={ strokeValue }
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="21.5" className={ getTextClass }>{ scoreCircle }</text>
      </svg>
    </div>
  
  )
}

ScoreCircle.propTypes = {
  score: PropTypes.string,
}
