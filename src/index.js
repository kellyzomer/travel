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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();