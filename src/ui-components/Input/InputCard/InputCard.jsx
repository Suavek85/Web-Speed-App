import React from 'react';
import InputUrl from '../InputUrl/InputUrl';
import InputButton from '../InputButton/InputButton';
import Spinner from '../Spinner/Spinner';
import WebOptimize from '../../svgs/WebOptimize';
import { appTitle } from '../../Constants';
import './InputCard.scss';

function InputCard(props) {
  return (
    <div className='inputcard__wrapper' >
      <div className='inputcard__sub-wrapper'>
        <h1>{appTitle}</h1>
          <InputUrl />
        <div className='inputcard__btn-wrapper'>
          <InputButton {...props} />
          <Spinner getReportStatus={props.getReportStatus} />
        </div>
      </div>
      <WebOptimize getReportStatus={props.getReportStatus} />
    </div>
  );
}

export default InputCard;