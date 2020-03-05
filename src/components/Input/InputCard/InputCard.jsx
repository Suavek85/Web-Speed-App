import React from 'react'

import InputUrl from '../InputUrl/InputUrl'
import InputButtonWrapper from '../InputButton/InputButtonWrapper'
import SpinnerWrapper from '../Spinner/SpinnerWrapper'
import WebOptimizeWrapper from '../../svgs/WebOptimizeWrapper'
import OpenButton from '../../Navigation/Buttons/OpenButton'
import { APPTITLE } from '../../../constants/content'
import './InputCard.scss'

function InputCard() {

  return (
    <div className='inputcard__wrapper' >
      <div className='inputcard__sub-wrapper'>
        <div className='inputcard__header'>
          <OpenButton />
          <h1>{APPTITLE}</h1>
        </div>
        <InputUrl />
        <div className='inputcard__btn-wrapper'>
          <InputButtonWrapper />
          <SpinnerWrapper />
        </div>
      </div>
      <WebOptimizeWrapper />
    </div>
  )
}

export default InputCard