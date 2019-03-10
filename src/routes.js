import React from 'react'
import { Switch, Route } from "react-router-dom";
import Jobs from './pages/Jobs';
import Compare from './pages/Compare';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Jobs} />
      <Route exact path="/compare" component={Compare} />
    </Switch>
  )
}
