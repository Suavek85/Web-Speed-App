import { appStates } from './states'

//APP HEADER
export const APPTITLE = 'Web Speed App'
export const SETTINGS = 'Settings'
export const SIGN_IN = 'Sign in'


//BUTTONS
export const btnsContent = {...appStates}
btnsContent.LOADING = 'Loading...' 
btnsContent.INACTIVE = 'Get report' 
btnsContent.ERROR = 'Oops, an error' 
btnsContent.SUCCESS = 'Get new report'

//LIGHTHOUSE

export const LIGHTHOUSE_TITLE = 'Lighthouse Score'
export const PERFORMANCE = 'Performance'

//FIRST CONTENTFUL PAIN
export const FIRST_PAINT_HEADER = 'First Contentful Paint'
export const FIRST_PAINT_CONTENT = 'First Contentful Paint (FCP) measures the time from navigation to the time when the browser renders the first bit of content from the DOM. This is an important milestone for users because it provides feedback that the page is actually loading.'
export const RESULT = 'Result: '
export const INPUT_HINT = 'Enter your website url in this format https://www.bbc.co.uk/'

//FIRST INPUT DELAY
export const FIRST_INPUT_DELAY_HEADER = 'First Input Delay'
export const FIRST_INPUT_DELAY_CONTENT = 'First Input Delay (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.'


//LIGHTHOUSE TABLE

//FIRST PAINT - LIGHTHOUSE
const FIRST_PAINT_TITLE = 'First Contentful Paint'
const FIRST_PAINT_DESC = 'First Contentful Paint marks the time at which the first text or image is painted.'

//LARGEST PAINT - LIGHTHOUSE
const LARGEST_PAINT_TITLE = 'Largest Contentful Paint'
const LARGEST_PAINT_DESC = 'Largest Contentful Paint marks the time at which the largest text or image is painted.'

//SPEED INDEX - LIGHTHOUSE
const SPEED_INDEX_TITLE = 'Speed Index.'
const SPEED_INDEX_DESC = 'Speed Index shows how quickly the contents of a page are visibly populated.'

//TIME TO INTERACTIVE - LIGHTHOUSE
const INTERACTIVE_TITLE = 'Time to Interactive.'
const INTERACTIVE = 'Time to interactive is the amount of time it takes for the page to become fully interactive.'

//TOTAL BLOCKING TIME - LIGHTHOUSE
const BLOCKING_TIME_TITLE = 'Total Blocking Time'
const BLOCKING_TIME_DESC = 'Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds'

//CUMULATIVE LAYOUT SHIFT
const LAYOUT_SHIFT_TITLE = 'Cumulative Layout Shift.'
const LAYOUT_SHIFT_DESC = 'Cumulative Layout Shift measures the movement of visible elements within the viewport.'

//TABS HEADERS
export const tabsHeader = [
  { content: 'First Paint' },
  { content: 'Largest Paint' },
  { content: 'Speed Index' },
  { content: 'Interactive' },
  { content: 'Blocking Time' },
  { content: 'Layout Shift' },
]

//TABS TITLES
export const tabsTitles = [
  FIRST_PAINT_TITLE, 
  LARGEST_PAINT_TITLE, 
  SPEED_INDEX_TITLE, 
  INTERACTIVE_TITLE,
  BLOCKING_TIME_TITLE,
  LAYOUT_SHIFT_TITLE
]

//TABS DESCRIPTIONS
export const tabsDescriptions = [
  FIRST_PAINT_DESC, 
  LARGEST_PAINT_DESC, 
  SPEED_INDEX_DESC, 
  INTERACTIVE,
  BLOCKING_TIME_DESC,
  LAYOUT_SHIFT_DESC
]
