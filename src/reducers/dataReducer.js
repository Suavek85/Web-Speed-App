export const dataReducer = (state = { getData: '?' }, action) => {
  switch (action.type) {
  case "SET_DATA":
    return {
      getData: action.payload
    }
  default:
    return {
      getData: '?'
    }
  }
}