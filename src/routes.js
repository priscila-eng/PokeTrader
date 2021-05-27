/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Switch, Router } from "react-router";

import Home from "./pages/Home";
import { history } from "./utils/history";
function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
