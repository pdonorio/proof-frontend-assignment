import { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, Switch, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios from 'axios';
import './App.css';
import Sidebar from './Sidebar';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Profile from './Profile';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to='/login' />
      )
    }
  />
);

const profile = () => (
  <div className="profile">
    <Profile />
  </div>
);

const activateAccount = ({ match }) => {
  const authBase = 'http://localhost:8080/auth/';
  axios.put(`${authBase}profile/activate/${match.params.token}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(200);
      } else if (response.status === 401) {
        alert('Sorry, this account has not been activated');
      } else {
        alert('Incorrect username/password');
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <h1>Account Activated</h1>
  );
};

const resetAccount = ({ match }) => {
  const authBase = 'http://localhost:8080/auth/';
  axios.put(`${authBase}reset/${match.params.token}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(200);
      } else if (response.status === 401) {
        alert('Sorry, this account has not been activated');
      } else {
        alert('Incorrect username/password');
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <h1>Account Reset</h1>
  );
};

activateAccount.propTypes = {
  match: PropTypes.string.isRequired,
};

resetAccount.propTypes = {
  match: PropTypes.string.isRequired,
};

export default class App extends Component {
  state = {
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={
              (() => (
                <Grid container style={{ height: '100%' }} spacing={0}>
                  <Grid className="leftSide" item xs={8}>
                    <Sidebar />
                  </Grid>
                  <Grid className="rightSide" item xs={4}>
                    <RegisterForm />
                  </Grid>
                </Grid>
              ))
            }
            />

            <Route
              path="/login"
              exact
              render={
              (() => (
                <Grid container style={{ height: '100%' }} spacing={0}>
                  <Grid className="leftSide" item xs={8}>
                    <Sidebar />
                  </Grid>
                  <Grid className="rightSide" item xs={4}>
                    <LoginForm />
                  </Grid>
                </Grid>
              ))
            }
            />

            <Route
              path="/public/register/:token"
              exact
              component={activateAccount}
            />

            <PrivateRoute
              path="/profile"
              exact
              component={profile}
            />

            <PrivateRoute
              path="/reset/:token"
              exact
              component={resetAccount}
            />

            <Route
              render={() => (<Redirect to="/" />)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
