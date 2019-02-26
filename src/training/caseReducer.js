import {
  LOAD_CASES
} from './actionTypes';

export default function caseReducer(state = [],action){
  switch(action.type){
    case LOAD_CASES:
      return action.cases;
    default:
      return state;
  }
}
