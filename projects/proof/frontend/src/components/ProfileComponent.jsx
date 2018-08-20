import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: '10px',
    backgroundColor: '#344955',
    height: '-webkit-fill-available',
  },
  button: {
    backgroundColor: 'yellow',
    width: 'inherit',
    float: 'right',
  },
  avatar: {
    margin: 10,
  },
});

const ProfileComponent = (props) => {
  const {
    classes,
    user,
    handleLogOut,
  } = props;
  return (
    <div className={classes.container}>
      <div>
        <h1> User Profile
          <Button onClick={handleLogOut} className={classes.button} size="small">
            Log out
          </Button>
        </h1>
      </div>
      <div>
        <div>
          Name: {user.name}
        </div>
        <div>
          Surname: {user.surname}
        </div>
        <div>
          email: {user.email}
        </div>
      </div>
    </div>
  );
};

ProfileComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  handleLogOut: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProfileComponent);
