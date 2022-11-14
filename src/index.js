import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import NetflixApp from './Netflix/App'
import BBCApp from "./BBC/App"
import App2 from "./React/App"
import App3 from './React2/App'
import App4 from './Clicker/App'
import Airbnb from "./BnB/App"
import Goal from './ifconditional/App'
import TermaryApp from "./termary/App"
import ShortApp from './shortCircuit/App'
import AppForm from './NameInput/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppForm />
  </React.StrictMode>
);
