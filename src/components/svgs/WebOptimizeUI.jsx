import React from "react"
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import './WebOptimizeUI.scss'

function WebOptimizeUI(props) {

  const { averageScore, loadingStatus } = props

  //Indicator
  const loadingMotion = { mass: 25, tension: 25, friction: 25 }
  const percentToDegree = percent => percent ? percent * 1.94 : 0
  const defaultDeegree = -164
  const addedDegree = percentToDegree(averageScore)
  const successDegree = defaultDeegree + addedDegree

  const indicatorProps = useSpring({
    from:{ transform: 'rotate(-65deg)', transformOrigin: 'center' },
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ transform: 'rotate(-155deg)', config: loadingMotion } )
        await next({ transform: 'rotate(0deg)', config: loadingMotion })
        await next({ transform: 'rotate(-100deg)', config: loadingMotion })
        await next({ transform: 'rotate(-65deg)', config: loadingMotion } )
        await next({ delay: 100 } )
      }
    },
  })

  const indicatorPropsSuccess = useSpring({
    to: { transform: `rotate(${successDegree}deg)`, transformOrigin: 'center' },
  })

  //Text squares
  const colorProps = useSpring({
    from:{ fill: "#FFFFFF" },
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ fill: "#91E0E8" })
        await next({ fill: "#5DC1D8" })
        await next({ fill: "#FFFFFF" })
      }
    },
  })

  const colorPropsBlue = useSpring({
    from:{ fill: "#91E0E8" },
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ fill: "#5DC1D8" })
        await next({ fill: "#FFFFFF" })
        await next({ fill: "#91E0E8" })
      }
    },
  })

  const colorPropsDarkBlue = useSpring({
    from:{ fill: "#5DC1D8" },
    to: async next => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ fill: "#FFFFFF" })
        await next({ fill: "#91E0E8" })
        await next({ fill: "#5DC1D8" })
      }
    },
  })

  //Text
  const firstDigit = averageScore === 100 ? 1 : null
  const secondDigit = averageScore >= 10 ? Math.floor(averageScore / 10) : null
  const thirdDigit = averageScore? averageScore - Math.floor(averageScore /10) * 10 : null

  const getText = (xCord, yCord, value) => {
    return (
      <text 
        x={xCord}
        y={yCord}
        fill="darkslategrey" 
        fontWeight='bold'
        fontFamily='Orbitron, sans-serif' 
        fontSize="65" > 
        {value}
      </text>
    )
  }

  return (
    <div className='weboptimize__wrapper'>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 0 512 512" }}
        xmlSpace="preserve"
      >
        <circle
          style={{ fill: "beige" }}
          cx="250.411"
          cy="263.49"
          r="198.62"
        />
        <path
          style={{ fill: "#445EA0" }}
          d="M370.784,273.047c-5.275,0-9.553-4.278-9.553-9.554c0-23.982-7.66-46.206-20.657-64.362l-0.001,0.001
            c-12.515-17.481-29.981-31.186-50.329-39.052l-0.001,0.001c-12.367-4.781-25.799-7.409-39.833-7.409
            c-13.98,0-27.355,2.608-39.681,7.353l-0.002-0.005c-20.38,7.844-37.877,21.542-50.418,39.025c0,0,0,0.001,0.001,0.001
            c-13.034,18.171-20.717,40.428-20.717,64.446c0,5.276-4.278,9.554-9.558,9.554H87.333c-0.181-3.163-0.286-6.347-0.286-9.554
            c0,90.223,73.141,163.362,163.363,163.362c87.015,0,158.128-68.033,163.077-153.808L370.784,273.047L370.784,273.047z"
        />
        <g>
          <path
            style={{ fill: "#ff8989" }}
            d="M160.31,199.046l-41.732-32.02c-0.001-0.001-0.002-0.002-0.003-0.003
              c-19.816,27.034-31.527,60.382-31.527,96.47c0,3.207,0.105,6.392,0.286,9.554h42.702c5.279,0,9.558-4.278,9.558-9.554
              C139.593,239.475,147.277,217.218,160.31,199.046C160.31,199.047,160.31,199.046,160.31,199.046z"
          />
          <path
            style={{ fill: "#80ff80" }}
            d="M382.309,167.109c-0.001,0-0.001,0.001-0.001,0.001l-41.733,32.022
              c12.997,18.156,20.657,40.38,20.657,64.362c0,5.276,4.277,9.554,9.553,9.554h42.703c0.182-3.163,0.285-6.347,0.285-9.554
              C413.772,227.443,402.087,194.128,382.309,167.109z"
          />
        </g>
        <g>
          <path
            style={{ fill: "#ff8989" }}
            d="M192.593,110.671c-0.001-0.002-0.001-0.004-0.002-0.005c-29.819,11.291-55.471,31.058-74.014,56.361
		l41.732,32.02c12.541-17.483,30.038-31.182,50.418-39.025L192.593,110.671z"
          />
          <path
            style={{ fill: "#FFB134" }}
            d="M308.381,110.724c-0.001,0.002-0.002,0.004-0.003,0.006l-18.134,49.351
		c20.348,7.866,37.814,21.57,50.329,39.052l41.734-32.022C363.788,141.809,338.168,122.036,308.381,110.724z"
          />
        </g>
        <path
          style={{ fill: "#FFB134" }}
          d="M308.378,110.73c-18.018-6.841-37.553-10.597-57.967-10.597c-20.357,0-39.842,3.736-57.817,10.539
	l18.137,49.354c12.326-4.745,25.701-7.353,39.681-7.353c14.034,0,27.465,2.628,39.833,7.409L308.378,110.73z"
        />
        <path
          style={{ fill: "#293D7C" }}
          d="M107.176,273.047H87.332c4.948,85.775,76.064,153.808,163.078,153.808
	c3.333,0,6.638-0.112,9.921-0.309C177.891,421.607,111.934,355.537,107.176,273.047z"
        />
        <path
          style={{ fill: "#FF9518" }}
          d="M315.577,270.993c-4.143,0-7.5-3.358-7.5-7.5c0-31.798-25.869-57.669-57.667-57.669
	c-31.799,0-57.669,25.87-57.669,57.669c0,4.142-3.358,7.5-7.5,7.5s-7.5-3.358-7.5-7.5c0-40.069,32.599-72.669,72.669-72.669
	c40.069,0,72.667,32.599,72.667,72.669C323.077,267.635,319.72,270.993,315.577,270.993z"
        />

        <g>
          <animated.path
            style={loadingStatus? colorPropsDarkBlue : { fill: "beige" }}
            d="M219 371.705C219 375.167 216.987 378 214.527 378H169.473C167.013 378 165 375.167 165 371.705V308.295C165 304.833 167.013 302 169.473 302H214.527C216.987 302 219 304.833 219 308.295V371.705Z"
          />
          { getText(174, 363, firstDigit) }
        </g>
        <g>
          <animated.path
            id="SVGCleanerId_0_1_"
            style={ loadingStatus? colorPropsBlue : { fill: "beige" }}
            d="M278 371.705C278 375.167 275.987 378 273.527 378H228.473C226.013 378 224 375.167 224 371.705V308.295C224 304.833 226.013 302 228.473 302H273.527C275.987 302 278 304.833 278 308.295V371.705Z"
          />
          { getText(234, 363, secondDigit) }

        </g>
        <g>
          <animated.path
            id="SVGCleanerId_1_1_"
            style={ loadingStatus? colorProps : { fill: "beige" }}
            d="M336 371.705C336 375.167 333.987 378 331.527 378H286.473C284.013 378 282 375.167 282 371.705V308.295C282 304.833 284.013 302 286.473 302H331.527C333.987 302 336 304.833 336 308.295V371.705Z"
          />
          { getText(292, 363, thirdDigit) }
        </g>
        <animated.g style={loadingStatus? indicatorProps : indicatorPropsSuccess} >
          <path
            style={{ fill: "#FE3745" }}
            d="M226.123,274.934c-6.308-13.391-0.546-29.419,12.847-35.728c0.736-0.346,1.494-0.661,2.318-0.96
	c0.057-0.02,0.11-0.037,0.166-0.05l132.179-34.823c0.893-0.235,1.818,0.2,2.213,1.034c0.391,0.832,0.135,1.829-0.613,2.363
	l-111.022,79.738c-0.047,0.035-0.094,0.066-0.145,0.095c-0.758,0.446-1.484,0.83-2.219,1.178
	C248.459,294.09,232.433,288.328,226.123,274.934z"
          />
          <path
            style={{ fill: "#B7092B" }}
            d="M238.97,247.049c0.736-0.346,1.494-0.661,2.318-0.96c0.057-0.02,0.11-0.037,0.166-0.05
		l124.931-32.913l8.848-6.355c0.748-0.534,1.004-1.531,0.613-2.363c-0.395-0.834-1.32-1.269-2.213-1.034l-132.179,34.823
		c-0.056,0.014-0.109,0.031-0.166,0.05c-0.824,0.299-1.582,0.614-2.318,0.96c-10.959,5.163-16.804,16.833-15.111,28.242
                C225.131,258.852,230.535,251.022,238.97,247.049z"
           
          />
          <circle
            style={{ fill: "#B7092B" }}
            cx="250.411"
            cy="263.49"
            r="13.472"
          />
        </animated.g>
      
      </svg>
    </div>
  )
}

WebOptimizeUI.propTypes = {
  loadingStatus: PropTypes.bool,
  averageScore: PropTypes.number
}

export default WebOptimizeUI

