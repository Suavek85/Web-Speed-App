import React from 'react'

export default function Section(props) {

  const { mainContent } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width="18px"
      height="18px"
      data-tip 
      data-for={ mainContent }
    >
      <path
        fill="#98ccfd"
        d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"
      />
      <path
        fill="#4788c7"
        d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
      />
      <path fill="#fff" d="M20 10A2 2 0 1 0 20 14A2 2 0 1 0 20 10Z" />
      <g>
        <path
          fill="#fff"
          d="M22 29L22 17 17 17 17 18 18 18 18 29 17 29 17 30 23 30 23 29z"
        />
      </g>
    </svg>
  )   

}