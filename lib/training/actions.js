'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTraining = loadTraining;
var LOAD_TRAINING = exports.LOAD_TRAINING = 'LOAD_TRAINING';
var LOAD_TRAINING_SUCCEEDED = exports.LOAD_TRAINING_SUCCEEDED = 'LOAD_TRAINING_SUCCEEDED';
var LOAD_TRAINING_FAILED = exports.LOAD_TRAINING_FAILED = 'LOAD_TRAINING_FAILED';

function loadTraining(service, patientId) {
  return {
    type: LOAD_TRAINING,
    data: {
      service: service,
      patientId: patientId
    }
  };
}