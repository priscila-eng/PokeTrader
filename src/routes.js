/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Switch, Router } from "react-router";

import Calculator from "./pages/Calculator";
import { history } from "./utils/history";
function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Calculator} />
      </Switch>
    </Router>
  );
}

export default Routes;
