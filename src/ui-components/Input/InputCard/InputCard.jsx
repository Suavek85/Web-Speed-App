import React from 'react';
import InputUrl from '../InputUrl/InputUrl';
import InputButton from '../InputButton/InputButton';
import Spinner from '../Spinner/Spinner';
import WebOptimize from '../../svgs/WebOptimize';
import './InputCard.scss';

function InputCard(props) {
  return (
    <div className='inputcard__wrapper' >
      <div className='inputcard__sub-wrapper'>
        <h1>Web Speed App</h1>
          <InputUrl />
        <div className='inputcard__btn-wrapper'>
          <InputButton {...props} />
          <Spinner getReportStatus={props.getReportStatus} />
        </div>
      </div>
      <WebOptimize />
    </div>
  );
}

export default InputCard;