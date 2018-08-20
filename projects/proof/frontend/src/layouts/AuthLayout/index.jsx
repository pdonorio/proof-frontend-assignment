import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MasterLayout from '../MasterLayout';
import BULLET_POINTS from './constants';
import DescriptionList from '../../components/DescriptionList';
import LoadingScreen from '../../components/LoadingScreen';
import './AuthLayout.css';

const AuthLayout = ({ children, isLoading }) => (
  <MasterLayout>
    <div className="main-layout">
      <Grid container spacing={24} style={{ margin: 'initial' }}>
        <Grid item xs={8} className="description-container">
          <div className="description-content">
            <h1>Proof it</h1>
            {
              BULLET_POINTS.map(p => (
                <DescriptionList point={p} key={p.id} />
              ))
            }
            <div className="learn-more-link">
              <a href="/">Learn more</a>
            </div>
          </div>

        </Grid>
        <Grid item xs={4} className="no-padding">
          <div className="form-container">
            { isLoading &&
              <LoadingScreen />
            }
            {children}
          </div>
        </Grid>
      </Grid>
    </div>
  </MasterLayout>
);

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

AuthLayout.defaultProps = {
  isLoading: false,
};

export default AuthLayout;
