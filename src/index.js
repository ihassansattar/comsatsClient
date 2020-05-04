import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter } from 'react-router-dom';
const options = {
  position: 'top right',
  timeout: 5000,
  offset: '30px',
  transition: 'scale',
  containerStyle: {
    marginTop:75
  }
}
ReactDOM.render(
    <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
      </AlertProvider>
    </BrowserRouter>
    ,
    document.getElementById('root'),
  ); 
  
