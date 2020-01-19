import React from 'react'
import InputUrl from '../InputUrl/InputUrl'
import InputButton from '../InputButton/InputButton'
import Spinner from '../Spinner/Spinner'
import WebOptimize from '../../svgs/WebOptimize'
import { APPTITLE } from '../../../constants/content'
import { appStates } from '../../../constants/states'
import './InputCard.scss'

function InputCard() {
  return (
    <div className='inputcard__wrapper' >
      <div className='inputcard__sub-wrapper'>
        <h1>{APPTITLE}</h1>
        <InputUrl />
        <div className='inputcard__btn-wrapper'>
          <InputButton />
          <Spinner />
        </div>
      </div>
      <WebOptimize />
    </div>
  )
}

export default InputCard