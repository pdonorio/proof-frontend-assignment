import React from 'react';

const loadingDivStyle = {
  height: '100%',
  position: 'absolute',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  top: '0',
  left: '0',
  fontFamily: 'Varela Round',
};

const LoadingScreen = () => (
  <div style={loadingDivStyle}>
    <h1>Please wait...</h1>
  </div>
);

export default LoadingScreen;
