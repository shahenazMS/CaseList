export const LOAD_TRAINING = 'LOAD_TRAINING';
export const LOAD_TRAINING_SUCCEEDED = 'LOAD_TRAINING_SUCCEEDED';
export const LOAD_TRAINING_FAILED = 'LOAD_TRAINING_FAILED';

export function loadTraining(service, patientId) {
  return {
    type: LOAD_TRAINING,
    data: {
      service,
      patientId,
    },
  };
}
