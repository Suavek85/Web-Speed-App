export default function (appState, appData, lighthouseData, errorStatus) {
  return {
    getAppState: appState,
    getData: appData,
    getLighthouseData: lighthouseData,
    getErrorStatus: errorStatus
  }
}