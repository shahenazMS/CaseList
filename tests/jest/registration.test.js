import ReactOnRails from 'react-on-rails';
import '../../src/training/registration';

it('should register TrainingApplication', () => {
  expect(ReactOnRails.getComponent('TrainingApplication')).not.toBeUndefined();
});
