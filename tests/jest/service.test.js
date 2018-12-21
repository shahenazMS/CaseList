import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import trainingService from '../../src/training/service';

describe('trainingService', () => {
  it('should return the appropriate value on success', () => {
    const mockRequest = new MockAdapter(axios);
    mockRequest.onGet('/patients/1/training', {
      headers: {
        Accept: 'application/json',
      },
    }).reply(200, {
      training: 'Training!',
    });

    return trainingService.getTraining(1).then(training => expect(training).toEqual('Training!'));
  });
});
