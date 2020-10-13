import React from 'react';

import '../App.css';
import Display from './Display/Display';
import ButtonPanel from './ButtonPanel/ButtonPanel';

const App = () => (
  <div className="App">
    <div className="container">
      <h1 className="title">React Calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  </div>
);

export default App;
