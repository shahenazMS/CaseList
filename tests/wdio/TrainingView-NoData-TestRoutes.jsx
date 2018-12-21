/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router-dom';
import NoDataAvailable from './TrainingView-NoData-Test';

const TrainingNoDataTestRoutes = () => (
  <div>
    <Route path="/tests/TrainingView-NoData" component={NoDataAvailable} />
  </div>);

export default TrainingNoDataTestRoutes;
