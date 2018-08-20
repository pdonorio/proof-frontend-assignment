import React from 'react';
import { Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import './index.css';

const DescriptionList = ({ point, isGameList }) => {
  const containerClass = isGameList ? 'game-point-container' : 'point-container';
  return (
    <div className={containerClass}>
      <div className="">
        <Icon>
          {point.icon}
        </Icon>
      </div>
      <div className="point-text">
        {point.title}
        <p className="point-description">
          {point.description}
        </p>
      </div>
    </div>);
};

DescriptionList.propTypes = {
  point: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isGameList: PropTypes.bool,
};

DescriptionList.defaultProps = {
  isGameList: false,
};

export default DescriptionList;
