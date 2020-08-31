import { BehaviorSubject } from 'rxjs'
import { navigationStates } from '../constants/navigationStates'

const subscriber = new BehaviorSubject(navigationStates.NOANIMATION)

export { subscriber }