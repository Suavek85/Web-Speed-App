import { appStates } from './states'

export const APPTITLE = 'Web Speed App'

export const btnsContent = {...appStates}
btnsContent.LOADING = 'Loading...' 
btnsContent.INACTIVE = 'Get report' 
btnsContent.ERROR = 'Oops, an error' 
btnsContent.SUCCESS = 'Report created'

export const FIRST_PAINT_HEADER = 'First Contentful Paint'
export const FIRST_PAINT_CONTENT = 'First Contentful Paint (FCP) measures the time from navigation to the time when the browser renders the first bit of content from the DOM. This is an important milestone for users because it provides feedback that the page is actually loading.'
export const RESULT = 'Result: '
export const INPUT_HINT = 'Enter your website url in this format https://www.bbc.co.uk/'

export const FIRST_INPUT_DELAY_HEADER = 'First Input Delay'
export const FIRST_INPUT_DELAY_CONTENT = 'First Input Delay (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.'
