import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { loadTraining } from '../actions';
import trainingReducers from '../reducers';
import trainingSagas from '../sagas';
import trainingService from '../service';

import TrainingView from './TrainingView';

const propTypes = {
  training: PropTypes.string,
  refreshTraining: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
};

class TrainingContainer extends React.Component {
  componentDidMount() {
    this.props.refreshTraining();
  }

  render() {
    const { isFailed, isLoading, training } = this.props;
    return <TrainingView isFailed={isFailed} isLoading={isLoading} text={training} />;
  }
}

TrainingContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  training: state.trainingState.training,
  isLoading: state.trainingState.isLoading,
  isFailed: state.trainingState.isFailed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  refreshTraining: () => {
    dispatch(loadTraining(ownProps.service || trainingService, ownProps.patientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingContainer);

const reducers = Object.assign({}, { trainingState: trainingReducers });
export { reducers };

const sagas = trainingSagas;
export { sagas };
