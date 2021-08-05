import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/main.page/main.page';
import DetailsPage from './pages/details.page/details.page';
import CountryDetails from './components/country-details/country-details';
import { CountryDetailsList } from './components/country-details-list/country-details-list';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/details/:id' children={<DetailsPage />} />
      </Switch>
    </Router>
  );
}

export default App;
