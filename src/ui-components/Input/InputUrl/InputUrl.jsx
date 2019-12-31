import React from 'react';
import './InputUrl.scss';

function InputCard() {
  return (
      <label for="urlinput" className="urlinput">
        <input autocomplete='off' type="url" id="urlinput" placeholder="&nbsp;" />
        <span className="label">Enter your website url</span>
        <span className="border"></span>
      </label>
  );
}

export default InputCard;