import React from 'react';
import './App.css';

import Login from './scenes/Login/Login';
import Dashboard from './scenes/Dashboard/Dashboard';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route //Login
            path={"/"}
            exact
            component={Login}
          />
          <Route // Dashboard
            path={"/dashboard/:id/"}
            exact
            component={() => <Dashboard posts />}
          />
          <Route // Dashboard
            path={"/dashboard/post/:id/"}
            exact
            component={() => <Dashboard post />}
          />
          <Route // Redirect
            path={"*"}
            exact
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
