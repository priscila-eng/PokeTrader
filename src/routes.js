/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Switch, Router } from "react-router";

import Home from "./pages/Home";
import ViewResults from "./pages/ViewResults";
import { history } from "./utils/history";
function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/results" component={ViewResults} />
      </Switch>
    </Router>
  );
}

export default Routes;
