import React from 'react';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../../logic/calculate';

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
