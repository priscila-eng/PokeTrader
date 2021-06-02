/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Switch, Router } from "react-router";

import Home from "./pages/Home";
import TradeHistory from "./pages/TradeHistory";
import ViewResults from "./pages/ViewResults";
import { history } from "./utils/history";
function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/results" component={ViewResults} />
        <Route exact={true} path="/" component={Home} />
        <Route path="/history" component={TradeHistory} />
      </Switch>
    </Router>
  );
}

export default Routes;
