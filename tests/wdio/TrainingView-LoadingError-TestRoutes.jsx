/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router-dom';
import LoadingError from './TrainingView-LoadingError-Test';

const TrainingLoadingErrorTestRoutes = () => (
  <div>
    <Route path="/tests/TrainingView-LoadingError" component={LoadingError} />
  </div>);

export default TrainingLoadingErrorTestRoutes;
