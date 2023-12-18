import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCz5J8OBPZITlkbYc_OTpS5IzkXtMN18DE",
  authDomain: "clase13-a73f4.firebaseapp.com",
  projectId: "clase13-a73f4",
  storageBucket: "clase13-a73f4.appspot.com",
  messagingSenderId: "249205676667",
  appId: "1:249205676667:web:e7bae16fcd1392ffe4a0de",
  measurementId: "G-NMKTYK1DG2"
};

const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
