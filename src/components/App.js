import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FlashControl from './FlashControl'
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage';

function App() {
  return (
    <Router>
        <div className = "container">
          <Header/>
            <Switch>
              <Route path = "/signin">
                <Signin />
              </Route>
              <Route path='/'>
                <FlashControl/>
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
