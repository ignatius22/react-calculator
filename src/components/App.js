import React from 'react';

import '../App.css';
import Display from '../components/Display/Display';
import ButtonPanel from '../components/ButtonPanel/ButtonPanel';

const App = () => (
  <div className="App">
    <h1>React Calculator</h1>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
