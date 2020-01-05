const states = [
    'LOADING',
    'INACTIVE',
]
    
export const appStates = states.reduce((acc, next) => {
      acc[next] = next
      return acc
}, {})