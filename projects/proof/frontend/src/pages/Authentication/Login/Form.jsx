import React from 'react';
import { Icon, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import DescriptionList from '../../../components/DescriptionList';
import AuthLayout from '../../../layouts/AuthLayout';

const Form = (props) => {
  const points = [
    {
      id: 1,
      icon: 'access_time',
      title: 'Game name 1',
      description: 'Starts in 2 hours',
    },
    {
      id: 2,
      icon: 'access_time',
      title: 'Game name 2',
      description: 'Starts in 3 hours',
    },
  ];
  return (
    <AuthLayout isLoading={props.loading}>
      {
        props.errorMessage !== '' && <p className="error-text">{props.errorMessage}</p>
      }
      <form>
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
          <Grid container spacing={24}>
            <Grid item xs={12} style={{ display: 'flex' }}>
              <NavLink to="/register" className="form-control">
                <Icon>
                play_circle_filled
                </Icon>
                SIGN UP
              </NavLink>
              <button
                className="dark-white-text link-like clickable"
                onClick={e => props.submitForm(e)}
              >
                Log In
              </button>
            </Grid>
            <Grid item xs={12}>
              <p className="dark-white-text">Coming up</p>
            </Grid>
            <Grid item xs={12} style={{ paddingLeft: '40px' }}>
              {
                points.map(p => (
                  <DescriptionList point={p} key={p.id} isGameList />
                ))
            }
            </Grid>
          </Grid>
        </div>
      </form>
    </AuthLayout>
  );
};

Form.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setField: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Form;
