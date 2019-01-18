/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import App from './components/app';

export default (
    <Route exact path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Route>
);
