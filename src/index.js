import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-zay1110p.us.auth0.com"
        clientId="n5k26ZC1svE2sWJTNAOExeCXHiXbWYO8"
        redirectUri={window.location.origin}
        scope="openid profile email"
        audience="login"

    >
         <App />

    </Auth0Provider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
