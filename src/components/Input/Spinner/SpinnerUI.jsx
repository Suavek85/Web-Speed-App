import React from 'react'
import PropTypes from 'prop-types'

import { appStates } from '../../../constants/states'
import styles from './SpinnerUI.scss'

export default function SpinnerUI(props) {
  const loadingStatus = props.getAppState === appStates.LOADING
  return loadingStatus && <div className={styles.block} />
}

SpinnerUI.propTypes = {
  loadingStatus: PropTypes.boolean
}
