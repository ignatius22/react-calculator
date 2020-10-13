import React from 'react';

import '../App.css';
import Display from '../components/Display/Display';
import ButtonPanel from '../components/ButtonPanel/ButtonPanel';

const App = () => (
  <div className="App">
   <div className='container'>
     <h1 className='title'>React Calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  </div>
);

export default App;
