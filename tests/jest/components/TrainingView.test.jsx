import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import TrainingView from '../../../src/training/components/TrainingView';

loadTranslation('../translations/en-US.json');

it('should render a TrainingView with no data', () => {
  const trainingView = shallowWithIntl(<TrainingView />);
  expect(trainingView.first().shallow()).toMatchSnapshot();
});

it('should render a TrainingView that has failed', () => {
  const trainingView = shallowWithIntl(<TrainingView isFailed />);
  expect(trainingView.first().shallow()).toMatchSnapshot();
});

it('should render a TrainingView view that is loading', () => {
  const trainingView = shallowWithIntl(<TrainingView />);
  expect(trainingView.first().shallow()).toMatchSnapshot();
});

it('should render a TrainingView that has succeeded with a valid OrionTraining', () => {
  const trainingView = shallowWithIntl(<TrainingView text="Training" />);
  expect(trainingView.first().shallow()).toMatchSnapshot();
});
