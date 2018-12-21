import trainingSagas, { fetchTraining } from '../../src/training/sagas';

import {
  LOAD_TRAINING,
  LOAD_TRAINING_FAILED,
  LOAD_TRAINING_SUCCEEDED,
} from '../../src/training/actions';

function testDummyService() {
  return 'test';
}

describe('training sagas', () => {
  it('should return the OrionTraining given an action', () => {
    const action = {
      type: LOAD_TRAINING,
      data: {
        service: { getTraining: testDummyService },
        patientId: 100,
      },
    };

    const testLoad = fetchTraining(action);
    testLoad.next(action);

    const result = testLoad.next('test');
    expect(result.value.PUT.action).toEqual({ training: 'test', type: LOAD_TRAINING_SUCCEEDED });
  });

  it('should return failed given an invalid action', () => {
    const result = fetchTraining({}).next();
    expect(result.value.PUT.action).toEqual({ type: LOAD_TRAINING_FAILED });
  });

  it('should return latest saga', () => {
    const result = trainingSagas[0]({}).next({});
    expect(result.value.FORK.args).toEqual([LOAD_TRAINING, fetchTraining]);
  });
});
