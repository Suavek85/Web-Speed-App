import React, { useState } from 'react';
import InputCard from '../src/ui-components/Input/InputCard/InputCard';
import Results from '../src/ui-components/Results/Results';
import { appStates } from './ui-components/States'
import './App.scss'

function App() {
 const [getReportStatus, setGetReportStatus] = useState(appStates.INACTIVE);
 const handleGetReportClick = () => { setGetReportStatus(appStates.LOADING) }
 return (
  <div className='app__wrapper'>
    <InputCard 
      getReportStatus={getReportStatus} 
      handleGetReportClick={handleGetReportClick} 
    />
    <Results />
  </div>
 );
}

export default App;
