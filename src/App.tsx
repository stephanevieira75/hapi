import React from 'react';
import './App.css';

import Login from './scenes/Login/Login';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path={"/"} exact component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
