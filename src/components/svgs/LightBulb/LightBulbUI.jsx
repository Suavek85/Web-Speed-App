import React from "react"
import { useSelector } from "react-redux"
import cls from 'classnames'

import { appStates } from '../../../constants/states.js'
import './LightBulb.scss'

function LightBulbUI() {
  const getAppState = useSelector(state => state.stateReducer.getAppState)
  const loadingStatus = getAppState === appStates.LOADING
  const successStatus = getAppState === appStates.SUCCESS
  const getBulbClasses = cls({
    'blink': loadingStatus,
    'shine': successStatus,
  })
  const getRaysClasses = cls({
    'hide': true,
    'show': successStatus,
  })

  return (
    <div className='bulb-wrapper'>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 480.8 480.8"
        style={{ enableBackground: "new 0 0 480.8 480.8" }}
        xmlSpace="preserve"
        height="28px"
        fill='white' 
      >
        <path
          className={getBulbClasses} // bulb inside
          d="M317.112,314.4c-22.4,22.4-19.6,67.6-19.6,67.6h-113.6c0,0,2.4-45.2-19.6-67.6
          c-24.4-21.6-40-52.8-40-87.6c0-64,52-116,116-116s116,52,116,116C356.312,261.6,341.112,292.8,317.112,314.4L317.112,314.4z"
        />
        <g>
          <path
            style={{ fill: "#A9A9A9" }} // grey --- bulb base top
            d="M300.712,417.6c0,6-4.8,10.8-10.8,10.8h-98.8c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8
            h98.4C295.512,406.8,300.712,411.6,300.712,417.6L300.712,417.6z"
          />
          <path
            style={{ fill: "#A9A9A9" }} // grey ---  bulb base bottom
            d="M285.912,462.4c0,6-4.8,10.8-10.8,10.8h-69.2c-6,0-10.8-4.8-10.8-10.8l0,0c0-6,4.8-10.8,10.8-10.8
            h69.2C281.112,451.6,285.912,456.4,285.912,462.4L285.912,462.4z"
          />
        </g>
        <g>
          <path
            style={{ fill: "grey" }} // "#210B20" --- stroke around bulb
            d="M323.112,318.4c26-23.6,40.8-56.8,40.8-91.6c0-68-55.6-123.6-123.6-123.6s-123.6,55.6-123.6,123.6
            c0,35.6,15.6,69.6,42,92.8c19.6,19.6,17.6,61.2,17.6,61.6c0,2,0.8,4,2,5.6c1.6,1.6,3.6,2.4,5.6,2.4h113.2c2,0,4-0.8,5.6-2.4
            s2-3.6,2-5.6c0-0.4-2-42,17.6-61.6C322.712,319.2,323.112,318.8,323.112,318.4z M311.912,308.4c-0.8,0.4-1.2,1.2-1.6,2
            c-17.6,18.8-20.4,49.6-20.8,64h-98c-0.4-14.8-3.6-46.8-22.4-65.6c-23.6-20.8-37.2-50.4-37.2-81.6c0-60,48.8-108.4,108.4-108.4
            c60,0,108.4,48.8,108.4,108.4C348.712,258,335.512,288,311.912,308.4z"
          />
          <path
            style={{ fill: "grey"}} // "#210B20" --- stroke line on bulb
            d="M240.312,135.2c-4,0-7.6,3.2-7.6,7.6c0,4,3.2,7.6,7.6,7.6c44.8,0,81.2,36.4,81.2,81.2
            c0,4,3.2,7.6,7.6,7.6c4,0,7.6-3.2,7.6-7.6C336.712,178.4,293.512,135.2,240.312,135.2z"
          />
          <path
            style={{ fill: "grey" }} // "#210B20" --- stroke base top
            d="M308.312,417.6c0-10.4-8.4-18.4-18.4-18.4h-98.8c-10.4,0-18.4,8.4-18.4,18.4
            c0,10.4,8.4,18.4,18.4,18.4h98.4C299.912,436,308.312,428,308.312,417.6z M289.512,420.8h-98.4c-2,0-3.2-1.6-3.2-3.2
            c0-2,1.6-3.2,3.2-3.2h98.4c2,0,3.2,1.6,3.2,3.2C293.112,419.6,291.512,420.8,289.512,420.8z"
          />
          <path
            style={{ fill: "grey" }}// "#210B20" -- stroke base bottom
            d="M275.112,444h-69.2c-10.4,0-18.4,8.4-18.4,18.4c0,10.4,8.4,18.4,18.4,18.4h69.2
            c10.4,0,18.4-8.4,18.4-18.4C293.512,452.4,285.112,444,275.112,444z M275.112,465.6h-69.2c-2,0-3.2-1.6-3.2-3.2
            c0-2,1.6-3.2,3.2-3.2h69.2c2,0,3.2,1.6,3.2,3.2C278.312,464.4,277.112,465.6,275.112,465.6z"
          />
          <path
            className={getRaysClasses}
            style={{ fill: "#FFD517" }} 
            d="M247.912,58.8V7.6c0-4-3.2-7.6-7.6-7.6c-4,0-7.6,3.2-7.6,7.6v51.6c0,4,3.2,7.6,7.6,7.6
            C244.712,66.4,247.912,63.2,247.912,58.8z"
          />
          <path
            className={getRaysClasses}
            style={{ fill: "#FFD517" }} 
            d="M366.312,38c-3.6-2.4-8-1.2-10.4,2l-28.4,42.8c-2.4,3.6-1.2,8,2,10.4c1.2,0.8,2.8,1.2,4,1.2
            c2.4,0,4.8-1.2,6.4-3.2l28.4-42.8C370.712,45.2,369.512,40.4,366.312,38z"
          />
          <path
            className={getRaysClasses}
            style={{ fill: "#FFD517" }} 
            d="M149.912,92.8c1.2,0,2.8-0.4,4-1.2c3.6-2.4,4.4-6.8,2.4-10.4l-27.6-43.2c-2.4-3.6-6.8-4.4-10.4-2.4
            c-3.6,2.4-4.4,6.8-2.4,10.4l27.6,43.2C145.112,91.6,147.512,92.8,149.912,92.8z"
          />
          <path
            className={getRaysClasses}
            style={{ fill: "#FFD517" }} 
            d="M43.912,128.8l45.2,24.4c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.2-1.6,6.8-4c2-3.6,0.8-8.4-3.2-10.4
            l-45.2-24.4c-3.6-2-8.4-0.8-10.4,3.2C39.112,122.4,40.312,126.8,43.912,128.8z"
          />
          <path
            className={getRaysClasses}
            style={{ fill: "#FFD517" }} 
            d="M387.912,154.4c1.2,0,2.4-0.4,3.6-0.8l45.2-24.4c3.6-2,5.2-6.4,3.2-10.4c-2-3.6-6.4-5.2-10.4-3.2
            l-45.2,24.4c-3.6,2-5.2,6.4-3.2,10.4C382.312,152.8,385.112,154.4,387.912,154.4z"
          />
        </g>
      </svg>
    </div>
  )
}

export default LightBulbUI