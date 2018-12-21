import React from 'react';
import Base from 'terra-base';
import TrainingView from '../../lib/training/components/TrainingView';
import TrainingTestWrapper from './TrainingView-TestWrapper';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () => (
  <Base locale={locale} >
    <TrainingTestWrapper>
      <TrainingView isLoading={false} isFailed />
    </TrainingTestWrapper>
  </Base>
);
