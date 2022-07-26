import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/portfolio/HomePage';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </BrowserRouter> 
  )
}

export default Routes;
