import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')
render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();