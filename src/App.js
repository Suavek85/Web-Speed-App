import React from 'react';
import InputCard from '../src/ui-components/Input/InputCard/InputCard';
import Results from '../src/ui-components/Results/Results';

function App() {
  return (
    <div style={{display: 'flex', backgroundColor: '#A8D0E6'}}>
      <InputCard />
      <Results />
    </div>
  );
}

export default App;
