import { appStates } from './states'

export const APPTITLE = 'Web Speed App'

export const btnsContent = {...appStates}
btnsContent.LOADING = 'Loading...' 
btnsContent.INACTIVE = 'Get report' 
btnsContent.ERROR = 'Oops, an error' 
btnsContent.SUCCESS = 'Report created'