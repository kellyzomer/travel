import React from 'react';
import logo from './global.svg';
import './App.css';
import Map from './Map.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Travel with Kell</p>
      </header>
      <p>Click on the highlighted country to read my travel blogposts</p>
      <div className="Map-container"> {/* Add a container div */}
        <Map /> {/* Render the Map component here */}
      </div>
    </div>
  );
}

export default App;