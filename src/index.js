import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Other code for your project...


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <router>
    <App />
  </router>
  </>
);

reportWebVitals();
