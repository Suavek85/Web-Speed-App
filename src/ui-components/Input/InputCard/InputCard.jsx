import React from 'react';
import InputUrl from '../InputUrl/InputUrl';
import InputButton from '../InputButton/InputButton';
import Spinner from '../Spinner/Spinner';
import './InputCard.scss';

function InputCard() {
  return (
    <div className='inputcard__wrapper'>
      <h1 style={{color:'white'}}>Web Speed App</h1>
      <InputUrl />
      <InputButton />
      <Spinner />
    </div>
  );
}

export default InputCard;