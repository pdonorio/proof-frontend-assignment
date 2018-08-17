import React from 'react';
import Grid from '@material-ui/core/Grid';

const LeftPanel = () =>
  (
    <Grid cellheight={160} className="grid-list" item xs={8}>
      <div className="left-content">
        <h1 className="text">Proof It</h1>
      </div>
    </Grid>
  );

export default LeftPanel;
