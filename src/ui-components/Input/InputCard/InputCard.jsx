import React from 'react'
import PropTypes from 'prop-types'
import InputUrl from '../InputUrl/InputUrl'
import InputButton from '../InputButton/InputButton'
import Spinner from '../Spinner/Spinner'
import WebOptimize from '../../svgs/WebOptimize'
import { APPTITLE } from '../../../constants/content'
import { appStates } from '../../../constants/states'
import './InputCard.scss'

function InputCard(props) {
  const { getReportStatus } = props
  return (
    <div className='inputcard__wrapper' >
      <div className='inputcard__sub-wrapper'>
        <h1>{APPTITLE}</h1>
        <InputUrl />
        <div className='inputcard__btn-wrapper'>
          <InputButton {...props} />
          <Spinner getReportStatus={getReportStatus} />
        </div>
      </div>
      <WebOptimize getReportStatus={getReportStatus} />
    </div>
  )
}

InputCard.propTypes = {
  getReportStatus: PropTypes.string.isRequired
}

InputCard.defaultProps = {
  getReportStatus: appStates.INACTIVE
}

export default InputCard