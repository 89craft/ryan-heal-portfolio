import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import CssBaseline from '@material-ui/core/CssBaseline';
require('dotenv').config();

/*
 * The main react configuration file and the root component of project
 */
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
