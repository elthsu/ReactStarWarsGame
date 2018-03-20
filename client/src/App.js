import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import ThroneRoom from "./ThroneRoom";
import Battle from "./Battle";
import NoMatch from "./NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/ThroneRoom" component={ThroneRoom} />
          <Route exact path="/Battle" component={Battle} />
          <Route component={NoMatch}/>
        </Switch>

    </div>
  </Router>;

export default App;
