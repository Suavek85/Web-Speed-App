export const urlReducer = (state = { getUrl: '?' }, action) => {
  switch (action.type) {
  case "SET_URL":
    return {
      getUrl: action.payload
    }
  default:
    return {
      getUrl: '?'
    }
  }
}