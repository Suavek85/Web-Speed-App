const displayNav = { left:'0px', width: '300px'}
const hideNav = { left:'-300px', width: '0px'}
const animDuration = { duration:330 }
const displayBackground = { opacity: .5, display: 'block'}
const hideBackground = { opacity: 0, display: 'none' }

const configObj = (config, reset, from, to) => { 
  return {
    config: config, 
    reset: reset, 
    from: from,  
    to: to
  }
}

export const collapseNavConfig = configObj(animDuration, true, displayNav, hideNav)

export const expandNavConfig = configObj(animDuration, true, hideNav, displayNav) 

export const collapseBackgroundConfig = configObj(animDuration, true, displayBackground, hideBackground)

export const expandBackgroundConfig = configObj(animDuration, true, hideBackground, displayBackground)