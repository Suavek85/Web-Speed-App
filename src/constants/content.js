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

//FIRST CONTENTFUL PAIN
export const FIRST_PAINT_HEADER = 'First Contentful Paint'
export const FIRST_PAINT_CONTENT = 'First Contentful Paint (FCP) measures the time from navigation to the time when the browser renders the first bit of content from the DOM. This is an important milestone for users because it provides feedback that the page is actually loading.'
export const RESULT = 'Result: '
export const INPUT_HINT = 'Enter your website url in this format https://www.bbc.co.uk/'

//FIRST INPUT DELAY
export const FIRST_INPUT_DELAY_HEADER = 'First Input Delay'
export const FIRST_INPUT_DELAY_CONTENT = 'First Input Delay (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.'

//SPEED INDEX
const SPEED_INDEX_TITLE = 'Speed Index.'
const SPEED_INDEX_DESC = 'Speed Index shows how quickly the contents of a page are visibly populated.'

//TIME TO FIRST BYTE
const FIRST_BYTE_TITLE = 'Server response times are low (TTFB).'
const FIRST_BYTE_DESC = 'Time To First Byte identifies the time at which your server sends a response.'

//TOTAL BYTE WIEGHT
const TOTAL_BYTE_WEIGHT_TITLE = 'Avoid enormous network payloads.'
const TOTAL_BYTE_WEIGHT_DESC = 'Large network payloads cost users real money and are highly correlated with long load times.'

//TOTAL BYTE WIEGHT
const INTERACTIVE_TITLE = 'Time to Interactive.'
const INTERACTIVE = 'Time to interactive is the amount of time it takes for the page to become fully interactive.'

//USED RESPONSIVE IMAGES
const RESP_IMAGES_TITLE = 'Properly size images.'
const RESP_IMAGES_DESC = 'Serve images that are appropriately-sized to save cellular data and improve load time.'

//TEXT COMPRESSION 
const TEXT_COMRPESSION_TITLE = 'Enable text compression.'
const TEXT_COMRPESSION_DESC = 'Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes.'

//TABS HEADERS
export const tabsHeader = [
  { content: 'Speed Index' },
  { content: 'Time to First Byte' },
  { content: 'Total Byte Weight' },
  { content: 'Interactive' },
  { content: 'Used Responsive Images' },
  { content: 'Uses Text Compression' },
]

//TABS TITLES
export const tabsTitles = [
  SPEED_INDEX_TITLE, 
  FIRST_BYTE_TITLE, 
  TOTAL_BYTE_WEIGHT_TITLE, 
  INTERACTIVE_TITLE,
  RESP_IMAGES_TITLE,
  TEXT_COMRPESSION_TITLE
]

//TABS DESCRIPTIONS
export const tabsDescriptions = [
  SPEED_INDEX_DESC, 
  FIRST_BYTE_DESC, 
  TOTAL_BYTE_WEIGHT_DESC, 
  INTERACTIVE,
  RESP_IMAGES_DESC,
  TEXT_COMRPESSION_DESC
]
