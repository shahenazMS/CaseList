import {
  LOAD_TRAINING,
  loadTraining,
} from '../../src/training/actions';

function testDummyService() {
  return 'Test API';
}

describe('training actions', () => {
  it('should create an action to load the OrionTraining', () => {
    expect(loadTraining(testDummyService, 100)).toEqual({
      type: LOAD_TRAINING,
      data: {
        service: testDummyService,
        patientId: 100,
      },
    });
  });
});
