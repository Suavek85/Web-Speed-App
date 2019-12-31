import React from 'react';
import InputUrl from '../InputUrl/InputUrl';
import InputButton from '../InputButton/InputButton';
import Spinner from '../Spinner/Spinner';
import WebOptimize from '../../AnimatedSvg/WebOptimize';
import './InputCard.scss';

function InputCard() {
  return (
    <div className='inputcard__wrapper' >
      <div className='inputcard__sub-wrapper'>
        <h1 style={{color:'white'}}>Web Speed App</h1>
        <InputUrl />
        <div style={{display:'flex'}}>
        <InputButton />
        <Spinner />
        </div>
      </div>
      
      
      <WebOptimize />
    </div>
  );
}

export default InputCard;