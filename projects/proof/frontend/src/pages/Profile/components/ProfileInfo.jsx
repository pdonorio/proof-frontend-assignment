import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const ProfileInfo = ({ title, value }) => (
  <React.Fragment>
    <Typography color="textSecondary">
      {title}
    </Typography>
    <Typography variant="subheading">
      {value}
    </Typography>
  </React.Fragment>
);

ProfileInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

ProfileInfo.defaultProps = {
  title: '',
  value: '',
};

export default ProfileInfo;
