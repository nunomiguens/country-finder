import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/main.page/main.page';
import DetailsPage from './pages/details.page/details.page';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/details' component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
