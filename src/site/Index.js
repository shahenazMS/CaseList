
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../training/components/app';
import { Router, browserHistory} from 'react-router';
import routes from '../training/routes';

ReactDOM.render(
   <Router history={browserHistory} routes={routes}/>,
   document.getElementById('app')
);
/*import NoDataTestRoutes from '../../tests/wdio/TrainingView-NoData-TestRoutes';
import TestLinks from '../../tests/wdio/TrainingView-TestLinks';

const testDummyService = {
  getTraining: () => (
    new Promise((resolve) => {
      setTimeout(() => { resolve('Training Rules'); }, 2500);
    })
  ),
};

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" render={() => (<Redirect to="/site" />)} />
      <Route
        path="/site" render={() => (
          <TrainingApplication
            patientId={100}
            locale="en-US"
            service={testDummyService}
            translationsLoadingHeader="Training"
          />)}
      />
      <Route exact path="/tests" component={TestLinks} />
      <LoadingErrorTestRoutes />
      <NoDataTestRoutes />
    </div>
  </HashRouter>
  , document.getElementById('app'),
  */
