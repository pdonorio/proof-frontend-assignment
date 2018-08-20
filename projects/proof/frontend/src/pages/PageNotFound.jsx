import React from 'react';
import Grid from '@material-ui/core/Grid';
import MasterLayout from '../layouts/MasterLayout';

const PageNotFound = () => (
  <MasterLayout>
    <Grid
      container
      className="centered-container"
      style={{ textAlign: 'center', flexDirection: 'column' }}
    >
      <h1>404</h1>
      <p>Oops! The page you are looking for could not be found!</p>
    </Grid>
  </MasterLayout>
);

export default PageNotFound;
