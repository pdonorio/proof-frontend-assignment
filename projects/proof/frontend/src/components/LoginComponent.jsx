import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import LeftPanel from './LeftPanel';

const LoginComponent = props =>
  (
    <Grid container className="root" spacing={16}>
      <LeftPanel />
      <Grid item xs={4}>
        <form className="form">
          <div className="error">{props.errors}</div>
          <FormGroup xs={4}>
            <Input required value={props.email} placeholder="Email" name="email" onChange={props.handleChange} className="custom-input" />
          </FormGroup>
          <FormGroup xs={4}>
            <Input required type="password" placeholder="Password" name="password" value={props.password} onChange={props.handleChange} className="custom-input" />
          </FormGroup>
          <div className="actions">
            <Button variant="contained" size="small" className="bttn" onClick={props.handleSubmit}>
              <PlayIcon />
                Login
            </Button>
            <a href="/signup" className="link">Sign Up</a>
          </div>
        </form>
      </Grid>
    </Grid>
  );

export default LoginComponent;

LoginComponent.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};
