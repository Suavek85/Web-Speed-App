import React, { useState, useEffect } from 'react'
import './ToggleSwitch.scss'

export default function ToggleSwitch() {

  const DARK_CLASS = "dark";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark ? document.documentElement.classList.add(DARK_CLASS) : document.documentElement.classList.remove(DARK_CLASS)   
  }, [isDark]);

  return (
    <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
            <input 
              type="checkbox" 
              id="checkbox" 
              onChange={event => setIsDark(event.target.checked)} 
            />
            <div className="slider round"></div>
      </label>
    </div>
  )
}
 