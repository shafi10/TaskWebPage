import React from "react";
import "./App.scss";
//import DataFORLanding from './Data/data.json'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Error from "./components/Error";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
