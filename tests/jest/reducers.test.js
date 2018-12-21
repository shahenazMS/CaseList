import trainingReducers from '../../src/training/reducers';
import {
  LOAD_TRAINING,
  LOAD_TRAINING_SUCCEEDED,
  LOAD_TRAINING_FAILED,
} from '../../src/training/actions';

describe('training reducers', () => {
  it('should return the given state when action type is not recognized', () => {
    const initialState = { state: 'initial' };

    const result = trainingReducers(initialState, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result).toBe(initialState);
  });

  it('should return the default state when the initial state is undefined', () => {
    const result = trainingReducers(undefined, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result.training).toBeUndefined();
  });

  it('should return isLoading after a load action', () => {
    const result = trainingReducers(undefined, { type: LOAD_TRAINING });

    expect(result).toEqual({
      isLoading: true,
      isFailed: false,
      training: undefined,
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a populated Training', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      training: undefined,
    };
    const result = trainingReducers(startingState, {
      type: LOAD_TRAINING_SUCCEEDED,
      training: 'Training',
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      training: 'Training',
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a nonpopulated Training', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      training: undefined,
    };
    const result = trainingReducers(startingState, {
      type: LOAD_TRAINING_SUCCEEDED,
      training: null,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      training: null,
    });
  });

  it('should return isLoading as false and isFailed as true after a load action fails', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      training: undefined,
    };
    const result = trainingReducers(startingState, {
      type: LOAD_TRAINING_FAILED,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: true,
      training: undefined,
    });
  });
});
