/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Switch, Router } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewResults from "./pages/ViewResults";
import { history } from "./utils/history";
function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/results" component={ViewResults} />
        <Route path="/calculator" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
