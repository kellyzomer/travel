// imported packages
import './App.css';
import logo from './global.svg';
import Map from './Map.js';
import React from 'react';
import 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <p>My travels</p>
      </header>
      <div className="Map-container">
        <Map />
      </div>
      <a className="polarsteps-link" href="https://www.polarsteps.com/KellyZomer" target="_blank" rel="noreferrer">
        Follow my travels on Polarsteps ↗
      </a>
    </div>
  );
}

export default App;
