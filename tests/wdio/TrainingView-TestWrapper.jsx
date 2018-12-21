import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const TrainingTestWrapper = ({ children }) => (
  <div data-orion-toolkit-content style={{ height: '100%' }}>
    {children}
  </div>
);

TrainingTestWrapper.propTypes = propTypes;

export default TrainingTestWrapper;
