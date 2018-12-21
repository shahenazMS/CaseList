import { call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_TRAINING,
  LOAD_TRAINING_SUCCEEDED,
  LOAD_TRAINING_FAILED,
} from './actions';

function* fetchTraining(action) {
  try {
    const training = yield call(action.data.service.getTraining, action.data.patientId);
    yield put({ type: LOAD_TRAINING_SUCCEEDED, training });
  } catch (e) {
    yield put({ type: LOAD_TRAINING_FAILED });
  }
}

function* fetchTrainingSaga() {
  yield takeLatest(LOAD_TRAINING, fetchTraining);
}

export { fetchTraining };
export default [fetchTrainingSaga];
