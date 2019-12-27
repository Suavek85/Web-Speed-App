import React from 'react';
import './InputUrl.scss';

function InputCard() {
  return (
      <label for="inp" className="inp">
        <input autocomplete='off' type="text" id="inp" placeholder="&nbsp;" />
        <span className="label">Enter your website url</span>
        <span className="border"></span>
      </label>
  );
}

export default InputCard;