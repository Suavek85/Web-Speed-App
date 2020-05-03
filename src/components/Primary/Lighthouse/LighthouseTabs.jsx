import React from 'react'
import PropTypes from 'prop-types'

export default function LighthouseTabs(props) {
  const { handleActiveTab, getTabClass, getActiveTabClass } = props
  return (
    <div onClickCapture={ handleActiveTab } className={ getTabClass }>
      <div id='0' className={ getActiveTabClass('0') }>Speed Index</div>
      <div id='1' className={ getActiveTabClass('1') }>Time to First Byte</div>
      <div id='2' className={ getActiveTabClass('2') }>Total Byte Weight</div>
      <div id='3' className={ getActiveTabClass('3') }>Interactive</div>
      <div id='4' className={ getActiveTabClass('4') }>Used Responsive Images</div>
      <div id='5' className={ getActiveTabClass('5') }>Uses Text Compression</div>
    </div>
  )
}

LighthouseTabs.propTypes = {
  handleActiveTab: PropTypes.func,
  getTabClass: PropTypes.string,
  getActiveTabClass: PropTypes.func,
}