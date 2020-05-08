import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from 'react-router-dom'
import Home from "./components/home/home";
import SubscriptionRouter from "./components/subscriptions/index";
import BangumisRouter from "@/components/bangumis";

function App () {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/subscriptions">
          <SubscriptionRouter />
        </Route>
        <Route path="/Bangumis">
          <BangumisRouter/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
