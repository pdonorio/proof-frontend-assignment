/* eslint-disable */
import { Component, Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { amber, blueGrey, grey, lightBlue } from '@material-ui/core/colors';
import Input from '@material-ui/core/Input';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import LoginRegister from './LoginRegister';
import { getProfile } from './api';
import { activateProfile, createUser, login, logout } from './api';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: amber[200],
      main: amber[200],
      dark: amber[300],
      contrastText: grey[800],
    },
    secondary: {
      light: blueGrey[100],
      main: blueGrey[800],
      dark: blueGrey[900],
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiInput: {
      root: {
        background: blueGrey[700],
        padding: 8,
        margin: 8,
      },
    },
  },
});

const initialState = {
  email: '',
  password: '',
  name: '',
  surname: '',
  loginVisible: true,
  errors: [],
  loading: false,
  loggedIn: false,
  token: null,
  user: {},
};

const { sessionStorage } = window;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.loggedIn = sessionStorage.getItem('loggedIn') || false,
    this.state.token = sessionStorage.getItem('token'),
    this.state.user = JSON.parse(sessionStorage.getItem('user') || '{}'),
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleActivateKeypress = (event) => {
      if (event.which === 13) {
        // Submit
        const { value } = event.target;
        const activateToken = value.replace(/ /g, '');
        activateProfile({ activateToken }, response => {
          if (!response.Response.errors) {
            this.doLogin();
          } else {
            alert(response.Response.errors[0]);
          }
        });
      }
    };
    this.onRegister = response => {
      const { errors, data } = response;
      if (errors) {
        alert(errors[0]);
        return;
      }
      this.doLogin();
    };
  }

  handleLogout(event) {
    logout({ token: this.state.token }, (response) => {
      window.sessionStorage.clear();
      this.setState(initialState)
    });
  }

  // Returns true if visibility changes.
  setLoginVisibility(visible) {
    if (visible === this.state.loginVisible) {
      return false;
    }
    this.setState({
      loginVisible: visible,
      password: '',
    });
    return true;
  }

  handleInputChange(data) {
    this.setState(data);
  }

  handleLoginSubmit() {
    if (this.setLoginVisibility(true)) {
      return;
    }
    this.doLogin();
  }

  doLogin() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({ loading: true });
    login(data, (response) => {
      this.setState({ loading: false });
      this.onLogin(response.Response);
    });
  }

  handleRegisterSubmit() {
    if (this.setLoginVisibility(false)) {
      return;
    }
    this.doRegister();
  }

  doRegister() {
    const data = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({ loading: true });
    createUser(data, (response) => {
      this.setState({ loading: false });
      this.onRegister(response.Response);
    });
  }

  onLogin(response) {
    const { errors, data } = response;
    if (data && data.token) {
      const { token } = data;
      getProfile({ token }, profile => {
        window.sessionStorage.setItem('token', token);
        window.sessionStorage.setItem('user', JSON.stringify(profile.Response.data));
        window.sessionStorage.setItem('loggedIn', true);
        this.setState({
          errors: [],
          user: profile.Response.data,
          loggedIn: true,
          token: token,
        });
      });
    } else {
      if (errors[0] !== 'Sorry, this account is not active') {
        alert(errors[0]);
      }
      this.setState({ errors });
    }
  }

  render() {
    const { classes } = this.props;
    if (this.state.loggedIn) {
      return (
        <div>
          <h1>Hello {this.state.user.name}!</h1>
          {JSON.stringify(this.state.user, null, 2)}
          <br />
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
      );
    }
    let rightContent;
    if (this.state.loading) {
      rightContent = (
        <div id="login-container" className={classNames(classes.loginContainer)}>
          <CircularProgress className={classes.progress} />
        </div>
      );
    } else if (this.state.errors.length > 0
      && this.state.errors[0] === 'Sorry, this account is not active') {
      rightContent = (
        <div className={classes.activate}>
          <h2>Please activate your account.</h2>
          <Input className={classes.activateInput} onKeyPress={this.handleActivateKeypress} />
        </div>
      );
    } else {
      rightContent = (
        <div id="login-container" className={classNames(classes.loginContainer)}>
          <LoginRegister
            name={this.state.name}
            surname={this.state.surname}
            email={this.state.email}
            password={this.state.password}
            loginVisible={this.state.loginVisible}
            onInputChange={this.handleInputChange}
            onLoginSubmit={this.handleLoginSubmit}
            onRegisterSubmit={this.handleRegisterSubmit}
          />
        </div>
      );
    }
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.rootContainer}>
          <div className={classes.leftColumn} />
          <div className={classes.rightColumn}>
            {rightContent}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = theme => ({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: blueGrey[800],
    maxWidth: 300,
    padding: 8,
    marginTop: '-20%',
  },
  rootContainer: {
    background: lightBlue[50],
    height: '100%',
    minHeight: 500,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    color: blueGrey[700],
  },
  leftColumn: {
    background: lightBlue['50'],
    flex: 4,
  },
  rightColumn: {
    background: blueGrey[800],
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  progress: {
    width: 100,
    margin: '0 auto',
  },
  activate: {
    color: blueGrey[200],
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    maxWidth: 400
  },
  activateInput: {
    color: blueGrey[50],
    padding: 8,
    maxWidth: 400,
    margin: '0 auto',
    width: '90%',
  }
});

export default withStyles(styles)(App);
