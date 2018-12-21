'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _TrainingApplication = require('../training/components/TrainingApplication');

var _TrainingApplication2 = _interopRequireDefault(_TrainingApplication);

var _TrainingViewLoadingErrorTestRoutes = require('../../tests/wdio/TrainingView-LoadingError-TestRoutes');

var _TrainingViewLoadingErrorTestRoutes2 = _interopRequireDefault(_TrainingViewLoadingErrorTestRoutes);

var _TrainingViewNoDataTestRoutes = require('../../tests/wdio/TrainingView-NoData-TestRoutes');

var _TrainingViewNoDataTestRoutes2 = _interopRequireDefault(_TrainingViewNoDataTestRoutes);

var _TrainingViewTestLinks = require('../../tests/wdio/TrainingView-TestLinks');

var _TrainingViewTestLinks2 = _interopRequireDefault(_TrainingViewTestLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testDummyService = {
  getTraining: function getTraining() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve('Training Rules');
      }, 2500);
    });
  }
}; /* eslint-disable import/no-extraneous-dependencies */


_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/site' });
      } }),
    _react2.default.createElement(_reactRouterDom.Route, {
      path: '/site', render: function render() {
        return _react2.default.createElement(_TrainingApplication2.default, {
          patientId: 100,
          locale: 'en-US',
          service: testDummyService,
          translationsLoadingHeader: 'Training'
        });
      }
    }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/tests', component: _TrainingViewTestLinks2.default }),
    _react2.default.createElement(_TrainingViewLoadingErrorTestRoutes2.default, null),
    _react2.default.createElement(_TrainingViewNoDataTestRoutes2.default, null)
  )
), document.getElementById('root'));