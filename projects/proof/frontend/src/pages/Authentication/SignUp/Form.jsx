import React from 'react';
import { Icon, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import AuthLayout from '../../../layouts/AuthLayout';

const Form = props => (
  <AuthLayout isLoading={props.loading}>
    <form>
      {
        props.errorMessage !== '' && <p>{props.errorMessage}</p>
      }
      <p className="instruction-text">
        {"Let's play games in two hours (we'll email you)"}
      </p>
      <div className="form-field-container">
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          id="email"
          onChange={e => props.setField(e)}
          value={props.email}
        />
      </div>
      <div className="form-field-container">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          id="password"
          onChange={e => props.setField(e)}
          value={props.password}
        />
      </div>
      <div className="form-field-container">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
          onChange={e => props.setField(e)}
          value={props.name}
        />
      </div>
      <div className="form-field-container">
        <input
          type="text"
          className="form-control"
          placeholder="Surname"
          id="surname"
          onChange={e => props.setField(e)}
          value={props.surname}
        />
      </div>
      <div className="form-field-container">
        <Grid container spacing={24}>
          <Grid item xs={12} style={{ display: 'flex' }}>
            <a href="/" className="form-control">
              <Icon>
                play_circle_filled
              </Icon>
              LOGIN
            </a>
            <button
              className="dark-white-text link-like clickable"
              onClick={e => props.submitForm(e)}
            >
                Sign Up
            </button>
          </Grid>
        </Grid>
      </div>
    </form>
  </AuthLayout>
);

Form.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired,
};

Form.defaultProps = {
  loading: false,
};

export default Form;
