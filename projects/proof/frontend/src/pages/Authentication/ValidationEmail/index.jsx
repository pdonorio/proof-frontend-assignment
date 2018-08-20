import React from 'react';
import Grid from '@material-ui/core/Grid';
import MasterLayout from '../../../layouts/MasterLayout';
import './main.css';
import emailImg from '../../../assets/if_paper_plane_1936915.svg';

const ValidationEmail = () => (
  <MasterLayout>
    <Grid container className="centered-container">
      <div className="email-sent-content">
        <img alt="Email Sent" src={emailImg} width="200" />
        <h3 className="">
          Woot! Activation email sent, please check your email.
        </h3>
      </div>
    </Grid>
  </MasterLayout>
);

export default ValidationEmail;
