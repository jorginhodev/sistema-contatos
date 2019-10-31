import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import New from './pages/New';
import Edit from './pages/Edit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/new" component={New} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}
