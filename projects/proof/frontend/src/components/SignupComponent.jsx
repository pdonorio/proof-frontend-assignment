import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import LeftPanel from './LeftPanel';

const SignupComponent = props =>
  (
    <Grid container className="root" spacing={16}>
      <LeftPanel />
      <Grid item xs={4}>
        <form className="form">
          <div className="success">{props.message}</div>
          <div className="error">{props.errors}</div>
          <FormGroup xs={4}>
            <Input required name="name" placeholder="Name" value={props.name} onChange={props.handleChange} className="custom-input" />
          </FormGroup>
          <FormGroup xs={4}>
            <Input required name="surname" placeholder="Surname" value={props.surname} onChange={props.handleChange} className="custom-input" />
          </FormGroup>
          <FormGroup>
            <Input required name="email" placeholder="Email" value={props.email} onChange={props.handleChange} className="custom-input" />
          </FormGroup>
          <FormGroup>
            <Input required name="password" placeholder="Password" type="password" value={props.password} onChange={props.handleChange} className="custom-input" />
          </FormGroup>
          <div className="actions">
            <Button variant="contained" className="bttn" size="small" onClick={props.handleSubmit}>
              <PlayIcon />
               Sign Up
            </Button>
            <a href="/" className="link">Login</a>
          </div>
        </form>
      </Grid>
    </Grid>
  );

export default SignupComponent;

SignupComponent.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
