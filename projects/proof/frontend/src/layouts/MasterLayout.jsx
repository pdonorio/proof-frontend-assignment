import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const MasterLayout = ({ children }) => {
  const containerStyle = {
    background: '#344855',
    color: '#fff',
    height: '100%',
    margin: 'initial',
  };
  return (
    <Grid style={containerStyle}>
      {children}
    </Grid>
  );
};

MasterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MasterLayout;
