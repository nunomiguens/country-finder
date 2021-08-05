import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/main.page/main.page';
import DetailsPage from './pages/details.page/details.page';

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
