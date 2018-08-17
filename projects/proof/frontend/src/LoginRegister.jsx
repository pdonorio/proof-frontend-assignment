/* eslint-disable */
import { Component, createElement } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { amber, blueGrey, grey } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Register from './Register';
import { createUser, login } from './api';

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
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: blueGrey[800],
    maxWidth: 300,
    padding: 8,
    marginTop: '-20%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formButton: {
    flex: 1,
    borderRadius: 0,
    margin: theme.spacing.unit,
    paddingTop: 12,
    paddingBottom: 12,
  },
  formButtonActive: {
    background: theme.palette.primary.light,
    borderRadius: 0,
    color: grey[800],
  },
};

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
  }

  handleEnterSubmit() {
    if (this.props.loginVisible) {
      this.props.onLoginSubmit();
    } else {
      this.props.onRegisterSubmit();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Register
          type={this.props.loginVisible ? 'login' : 'register'}
          name={this.props.name}
          surname={this.props.surname}
          email={this.props.email}
          password={this.props.password}
          onSubmit={this.handleEnterSubmit}
          onInputChange={this.props.onInputChange}
        />
        <div className={classes.buttonContainer}>
          <FormButton
            active={this.props.loginVisible}
            classes={this.props.classes}
            onClick={this.props.onLoginSubmit}
            text="Log In"
          />
          <FormButton
            active={!this.props.loginVisible}
            classes={this.props.classes}
            onClick={this.props.onRegisterSubmit}
            text="Sign Up"
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

function FormButton(props) {
  const { classes } = props;
  const realProps = Object.assign({}, props);
  delete realProps.active;
  delete realProps.classes;
  if (props.active) {
    realProps.variant = 'contained';
    realProps.color = 'primary';
    realProps.className = classNames(classes.formButton, classes.formButtonActive);
  } else {
    realProps.className = classNames(classes.formButton);
  }
  return createElement(Button, realProps, props.text);
}

FormButton.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string, // eslint-disable-line
  classes: PropTypes.object, // eslint-disable-line
};

LoginRegister.propTypes = {
  classes: PropTypes.object, // eslint-disable-line
  onInputChange: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
  onRegisterSubmit: PropTypes.func.isRequired,
};

LoginRegister.defaultProps = {
  classes: {},
};

export default withStyles(styles)(LoginRegister);
