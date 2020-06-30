import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import NaviBar from './components/navbar/NaviBar';
import CountriesList from './components/countriesList/CountriesList';
import Slot from './components/slot/Slot';
import { Provider } from 'react-redux';
import CountryName from './components/countryName/CountryName';
import CountryFilter from './components/countryFilter/CountryFilter';
import UserForm from './components/UserForm/UserForm';
import store from './reducers/store.js';

export const makeRouting = () => {

  return (
    <Provider store={store}>
      <Router>
      <NaviBar />
        <div>
          <Route path="/" component={App} exact/>
          <Route path="/byName" component={CountryName} />
          <Route path="/filter" component={CountryFilter} />
          <Route path="/listing" component={CountriesList} />
          <Route path="/slot" component={Slot} />
          <Route path="/form" component={UserForm} />
        </div>
      </Router>
     </Provider>
  );
};
