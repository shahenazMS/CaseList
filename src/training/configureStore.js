import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cases from './caseReducer';
import {prefixReducer,groupReducer,pathReducer,resiReducer} from './refReducer';

//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
  return createStore(
    combineReducers({cases,prefixReducer,groupReducer,pathReducer,resiReducer}),
    initialState
  );
}
