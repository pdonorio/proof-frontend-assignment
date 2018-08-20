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
    width: 'inherit',
  },
});

const SignUpComponent = (props) => {
  const {
    classes,
    user,
    handleChange,
    handleSubmit,
    error,
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
          autoHideDuration={6000}
        >
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={error}
          />
        </Snackbar>
        <div className={classes.body}>
          <h1>Sign Up</h1>
          <FormControl className={classes.margin}>
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
              value={user.email}
              onChange={e => handleChange(e.target.name, e.target.value)}
              id="custom-input-email"
            />
          </FormControl><br />
          <FormControl className={classes.margin}>
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
              value={user.password}
              onChange={e => handleChange(e.target.name, e.target.value)}
              id="custom-input-password"
            />
          </FormControl><br />
          <FormControl className={classes.margin}>
            <InputLabel
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Name
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              name="name"
              value={user.name}
              onChange={e => handleChange(e.target.name, e.target.value)}
              id="custom-input-name"
            />
          </FormControl><br />
          <FormControl className={classes.margin}>
            <InputLabel
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="custom-css-input"
            >
              Surname
            </InputLabel>
            <Input
              classes={{
                underline: classes.cssUnderline,
              }}
              name="surname"
              value={user.surname}
              onChange={e => handleChange(e.target.name, e.target.value)}
              id="custom-input-surname"
            />
          </FormControl><br />
          <Button onClick={handleSubmit} className={classes.button} size="small">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

SignUpComponent.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

SignUpComponent.defaultProps = {
  error: null,
};

export default withStyles(styles)(SignUpComponent);
