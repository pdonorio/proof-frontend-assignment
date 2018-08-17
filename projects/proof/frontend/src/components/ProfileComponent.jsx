import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ProfileComponent = props =>
  (
    <Grid container className="profile" spacing={16}>
      <Grid className="welcome-box" item xs={10}>
        Welcome {props.user.name} {props.user.surname} ({props.user.email})
      </Grid>
      <Grid item xs={2}>
        <Button onClick={props.handleLogout}>Logout</Button>
      </Grid>
    </Grid>
  );

export default ProfileComponent;

ProfileComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  handleLogout: PropTypes.func.isRequired,
};
