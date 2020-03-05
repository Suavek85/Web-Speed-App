import { appStates } from './states'

export const APPTITLE = 'Web Speed App'

export const btnsContent = {...appStates}
btnsContent.LOADING = 'Loading...' 
btnsContent.INACTIVE = 'Get report' 
btnsContent.ERROR = 'Oops, an error' 
btnsContent.SUCCESS = 'Report created'

export const FIRST_PAINT_HEADER = 'First Contentful Paint'
export const FIRST_PAINT_CONTENT = 'First Contentful Paint (FCP) measures the time from navigation to the time when the browser renders the first bit of content from the DOM. This is an important milestone for users because it provides feedback that the page is actually loading.'
export const FIRST_PAINT_RESULT = 'Result: '