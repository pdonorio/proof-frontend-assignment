import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import Verification from './pages/Verification';
import NoMatch from './pages/NoMatch';
import './App.css';

const App = () =>
  (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/verification" component={Verification} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );


export default App;
