import React from 'react'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import NaviBar from './components/navbar/NaviBar';
import CountriesList from './components/countriesList/CountriesList';
import Slot from './components/slot/Slot';

export const makeRouting = () => {

  return (
    <Router>
    <NaviBar />
      <div>
        <Route path="/" component={App} exact/>
        <Route path="/listing" component={CountriesList} />
        <Route path="/slot" component={Slot} />
      </div>
    </Router>
  );
};