import React from 'react';
import { appStates } from '../../States';
import './Spinner.scss';

function Spinner(props) {
  const loadingStatus = props.getReportStatus === appStates.LOADING;
  return loadingStatus && <div className="spinner"></div> 
}

export default Spinner;