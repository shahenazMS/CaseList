import {
  LOAD_TRAINING,
  LOAD_TRAINING_SUCCEEDED,
  LOAD_TRAINING_FAILED,
} from './actions';

const trainingReducers = (state = {
  isFailed: false,
  isLoading: true,
  training: undefined,
}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_TRAINING:
      newState.isFailed = false;
      newState.isLoading = true;
      return newState;

    case LOAD_TRAINING_SUCCEEDED:
      newState.isFailed = false;
      newState.isLoading = false;
      newState.training = action.training;
      return newState;

    case LOAD_TRAINING_FAILED:
      newState.isFailed = true;
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
};

export default trainingReducers;
