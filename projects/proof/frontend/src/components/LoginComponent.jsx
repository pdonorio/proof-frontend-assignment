import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import SideBoxComponent from './SideBoxComponent';

const styles = theme => ({
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '-webkit-fill-available',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '25%',
    float: 'right',
    height: '-webkit-fill-available',
    backgroundColor: '#344955',
  },
  body: {
    margin: '100px 40px',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'white',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'white',
    },
  },
  button: {
    backgroundColor: 'yellow',
    marginRight: '15px',
  },
});

const LoginComponent = (props) => {
  const {
    classes,
    auth,
    handleChange,
    navigateSignUp,
    handleSubmit,
    handleClose,
    error,
    success,
  } = props;
  return (
    <div className={classes.mainContainer}>
      <SideBoxComponent />
      <div className={classes.container}>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={error}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={error}
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={success}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={success}
          />
        </Snackbar>
        <div className={classes.body}>
          <h1>Log In</h1>
          <FormControl className={classes.margin} required>
            <InputLabel
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Email
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              name="email"
              value={auth.email}
              onChange={e => handleChange(e.target.name, e.target.value)}
              id="custom-css-input-email"
              required
            />
          </FormControl>
          <FormControl className={classes.margin} required>
            <InputLabel
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Password
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              name="password"
              type="password"
              value={auth.password}
              onChange={e => handleChange(e.target.name, e.target.value)}
              id="custom-css-input-password"
              required
            />
          </FormControl>
          <Button className={classes.button} onClick={handleSubmit} size="small">
            Log In
          </Button>
          <Button onClick={navigateSignUp} size="small">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

LoginComponent.propTypes = {
  auth: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  navigateSignUp: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
};

LoginComponent.defaultProps = {
  error: null,
  success: null,
};

export default withStyles(styles)(LoginComponent);
