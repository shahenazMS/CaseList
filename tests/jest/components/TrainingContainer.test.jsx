/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import TrainingContainer from '../../../src/training/components/TrainingContainer';
import { LOAD_TRAINING } from '../../../src/training/actions';

it('should render a TrainingContainer with a populated Training', () => {
  const testContainer = shallowWithStore(
    <TrainingContainer />,
    createMockStore({
      trainingState: {
        training: 'Training',
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a TrainingContainer with a nonpopulated Training', () => {
  const testContainer = shallowWithStore(
    <TrainingContainer />,
    createMockStore({
      trainingState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a TrainingContainer with OrionTraining loading', () => {
  const testContainer = shallowWithStore(
    <TrainingContainer />,
    createMockStore({
      trainingState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a Training container with a OrionTraining failed', () => {
  const testContainer = shallowWithStore(
    <TrainingContainer />,
    createMockStore({
      trainingState: {
        isFailed: true,
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should call the dispatch method', () => {
  const testStore = createMockStore({
    trainingState: {
    },
  });
  const testContainer = shallowWithStore(
    <TrainingContainer patientId={100} />,
    testStore,
  );

  testContainer.props().refreshTraining();
  expect(testStore.isActionTypeDispatched(LOAD_TRAINING)).toBe(true);
});
