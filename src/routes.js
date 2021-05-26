import { history } from 'history'
import { Route, Switch, Router } from 'react-router'
import Calculator from './pages/Calculator'
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
