import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import NaviBar from './components/navbar/NaviBar';
import CountriesList from './components/countriesList/CountriesList';
import Slot from './components/slot/Slot';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import CountryName from './components/countryName/CountryName';

const store = createStore(reducer)

export const makeRouting = () => {

  return (
    <Provider store={store}>
      <Router>
      <NaviBar />
        <div>
          <Route path="/" component={App} exact/>
          <Route path="/byName" component={CountryName} />
          <Route path="/listing" component={CountriesList} />
          <Route path="/slot" component={Slot} />
        </div>
      </Router>
     </Provider>
  );
};
