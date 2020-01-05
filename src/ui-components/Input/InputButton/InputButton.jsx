import React from 'react';
import { appStates } from '../../States';
import './InputButton.scss';
import cls from 'classnames';


function InputButton(props) {
  const loadingStatus = props.getReportStatus === appStates.LOADING; 
  const inactiveStatus = props.getReportStatus === appStates.INACTIVE; 
  const getButtonClasses = cls({
    'inputbutton__wrapper': true,
    'inputbutton__wrapper--inactive': inactiveStatus,
    'inputbutton__wrapper--loading': loadingStatus,
  })
  
  return (
    <button 
      onClick={props.handleGetReportClick} 
      disabled={loadingStatus}
      className={getButtonClasses}>
        {inactiveStatus && 'Get report'}
        {loadingStatus && 'Loading'}
    </button>
  );
}

export default InputButton;