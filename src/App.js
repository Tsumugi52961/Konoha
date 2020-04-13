import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from "./components/home/home";
import Subscriptions from "./components/subscriptions/subscriptions";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/subs">
          <Subscriptions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
