/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

const TrainingTestLinks = () => (
  <div>
    <ul>
      <li><Link to="/tests/TrainingView-LoadingError">Loading Error Tests</Link></li>
      <li><Link to="/tests/TrainingView-NoData">No Data Tests</Link></li>
    </ul>
  </div>
);

export default TrainingTestLinks;
