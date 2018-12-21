'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trainingServiceFactory = function trainingServiceFactory() {
  return {
    getTraining: function getTraining(patientId) {
      return _axios2.default.get('/patients/' + patientId + '/training', {
        headers: {
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.data.training;
      });
    }
  };
};

exports.default = trainingServiceFactory();