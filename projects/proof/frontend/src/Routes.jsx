import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import ProfileContainer from './containers/ProfileContainer';

const Routes = () => (
  <Switch>
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/register" component={LoginContainer} />
    <Route
      path="/"
      render={() => (
        localStorage.getItem('session') ? (
          <Redirect to="/profile" />
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  </Switch>
);

export default Routes;
