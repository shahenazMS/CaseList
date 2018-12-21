import React from 'react';
import TrainingApplication from '../../../src/training/components/TrainingApplication';

it('should render a TrainingApplication with a placeholder', () => {
  const testDummyService = {
    getTraining: () => (
      new Promise((resolve) => {
        setTimeout(() => { resolve(); }, 1);
      })
    ),
  };

  const testView = shallow(<TrainingApplication
    locale="en-US"
    patientId={100}
    service={testDummyService}
    translationsLoadingHeader="OrionTraining!!!!"
  />);
  expect(testView.first().shallow()).toMatchSnapshot();
});
