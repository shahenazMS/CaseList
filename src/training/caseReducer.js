import {
  LOAD_CASES
} from './actions';

export default function caseReducer(state = [],action){
  switch(action.type){
    case LOAD_CASES:
      return action.cases;
    default:
      return state;
  }
}
