import React, { useState, useEffect } from 'react'
import './ToggleSwitch.scss'

export default function ToggleSwitch() {

  const DARK_CLASS = "dark";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark ? document.documentElement.classList.add(DARK_CLASS) : document.documentElement.classList.remove(DARK_CLASS)   
  }, [isDark]);

  return (
    <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
            <input 
              type="checkbox" 
              id="checkbox" 
              onChange={event => setIsDark(event.target.checked)} 
            />
            <div class="slider round"></div>
      </label>
    </div>
  )
}
 