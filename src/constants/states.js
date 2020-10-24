const states = [
  'LOADING',
  'INACTIVE',
  'ERROR',
  'SUCCESS'
]
    
export const appStates = states.reduce((acc, next) => {
  acc[next] = next
  return acc
}, {})