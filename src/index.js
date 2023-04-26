import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Prop from './props';
import "bootstrap/dist/css/bootstrap.min.css";


// import Fet from  './fetch';
// import Nav from './Navabr';
// import Wel from './welcome'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Nav/> */}
    {/* <Prop /> */}
    
    {/* <Wel /> */}
{/* <Load /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
