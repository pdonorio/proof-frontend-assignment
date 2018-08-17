import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const VerificationComponent = props =>
  (
    <Grid container className="profile" spacing={16}>
      { props.message &&
        <Grid className="welcome-box success">
          {props.message} <a href="/">Login Now</a>
        </Grid>
      }
      <Grid className="welcome-box error">
        {props.errors}
      </Grid>
    </Grid>
  );

export default VerificationComponent;

VerificationComponent.propTypes = {
  message: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
};
