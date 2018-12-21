'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraClinicalItemView = require('terra-clinical-item-view');

var _terraClinicalItemView2 = _interopRequireDefault(_terraClinicalItemView);

var _terraClinicalHeader = require('terra-clinical-header');

var _terraClinicalHeader2 = _interopRequireDefault(_terraClinicalHeader);

var _terraStatusView = require('terra-status-view');

var _terraStatusView2 = _interopRequireDefault(_terraStatusView);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  text: _propTypes2.default.string,
  isLoading: _propTypes2.default.bool,
  isFailed: _propTypes2.default.bool,
  intl: _propTypes2.default.object.isRequired
};
/* TODO: Add imports necessary for Kaiju props added below */


var TrainingView = function TrainingView(props) {
  var isLoading = props.isLoading,
      isFailed = props.isFailed,
      text = props.text,
      intl = props.intl;

  var content = void 0;

  if (isLoading) {
    content = null;
  } else if (isFailed) {
    content = _react2.default.createElement(_terraStatusView2.default, { variant: _terraStatusView2.default.Opts.variants.ERROR, message: intl.formatMessage({ id: 'orion-training.training-failed-to-load' }), isGlyphHidden: true });
  } else if (text && text.length > 0) {
    content = _react2.default.createElement(_terraClinicalItemView2.default, { 'data-component-type': 'terra-clinical-item-view', displays: [_react2.default.createElement(_terraClinicalItemView2.default.Display, { text: text })] });
  } else {
    content = _react2.default.createElement(_terraStatusView2.default, { variant: _terraStatusView2.default.Opts.variants.NODATA, message: intl.formatMessage({ id: 'orion-training.no-training' }), isGlyphHidden: true });
  }

  return _react2.default.createElement(
    _terraContentContainer2.default,
    { header: _react2.default.createElement(_terraClinicalHeader2.default, { title: intl.formatMessage({ id: 'orion-training.training' }) }) },
    content
  );
};

TrainingView.propTypes = propTypes;

exports.default = (0, _reactIntl.injectIntl)(TrainingView);