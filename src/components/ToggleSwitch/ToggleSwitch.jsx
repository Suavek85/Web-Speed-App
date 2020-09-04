import React, { useState, useEffect } from 'react'
import './ToggleSwitch.scss'

export default function ToggleSwitch() {

  const DARK_CLASS = "dark"

  const getIsDarkfromLocal = localStorage.getItem('isDarkValue') === 'true'? true : false
  
  const [isDark, setIsDark] = useState(getIsDarkfromLocal || false)

  useEffect(() => {
    localStorage.setItem('isDarkValue', isDark.toString())
    isDark? document.documentElement.classList.add(DARK_CLASS) : document.documentElement.classList.remove(DARK_CLASS)  
  }, [isDark])

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input 
          type="checkbox" 
          id="checkbox" 
          defaultChecked={isDark}
          onChange={event => setIsDark(event.target.checked)} 
        />
        <div className="slider round"></div>
      </label>
    </div>
  )
}
 