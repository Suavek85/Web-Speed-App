const states = [
  'EXPAND',
  'COLLAPSE',
  'NOANIMATION'
]
      
export const navigationStates = states.reduce((acc, next) => {
  acc[next] = next
  return acc
}, {})