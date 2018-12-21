'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sagas = exports.reducers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = require('../sagas');

var _sagas2 = _interopRequireDefault(_sagas);

var _service = require('../service');

var _service2 = _interopRequireDefault(_service);

var _TrainingView = require('./TrainingView');

var _TrainingView2 = _interopRequireDefault(_TrainingView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  training: _propTypes2.default.string,
  refreshTraining: _propTypes2.default.func.isRequired,
  isLoading: _propTypes2.default.bool,
  isFailed: _propTypes2.default.bool
};

var TrainingContainer = function (_React$Component) {
  _inherits(TrainingContainer, _React$Component);

  function TrainingContainer() {
    _classCallCheck(this, TrainingContainer);

    return _possibleConstructorReturn(this, (TrainingContainer.__proto__ || Object.getPrototypeOf(TrainingContainer)).apply(this, arguments));
  }

  _createClass(TrainingContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.refreshTraining();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isFailed = _props.isFailed,
          isLoading = _props.isLoading,
          training = _props.training;

      return _react2.default.createElement(_TrainingView2.default, { isFailed: isFailed, isLoading: isLoading, text: training });
    }
  }]);

  return TrainingContainer;
}(_react2.default.Component);

TrainingContainer.propTypes = propTypes;

var mapStateToProps = function mapStateToProps(state) {
  return {
    training: state.trainingState.training,
    isLoading: state.trainingState.isLoading,
    isFailed: state.trainingState.isFailed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    refreshTraining: function refreshTraining() {
      dispatch((0, _actions.loadTraining)(ownProps.service || _service2.default, ownProps.patientId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TrainingContainer);


var reducers = _extends({}, { trainingState: _reducers2.default });
exports.reducers = reducers;


var sagas = _sagas2.default;
exports.sagas = sagas;