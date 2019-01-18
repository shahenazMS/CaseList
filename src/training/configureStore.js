import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cases from './caseReducer';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
  return createStore(
    combineReducers({cases}),
    initialState
  );
}
