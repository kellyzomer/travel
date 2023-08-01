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
        <img src={logo} className="App-logo" alt="logo" />
        <p>Travel with Kell</p>
      </header>
      <p>Website is under construction: <br></br>
        Click on the highlighted countries to read my travel blogposts</p>
      <div className="Map-container"> {/* Add a container div */}
        <Map /> {/* Render the Map component here */}
      </div>
    </div>
  );
}

export default App;