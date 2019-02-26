import * as type from './actionTypes';


export function prefixReducer(state = [],action){
  switch(action.type){
    case type.LOAD_PREFIXES:
      return action.prefixes;
    default:
      return state;
    }
  }


export function resiReducer(state = [],action){
  switch(action.type){
    case type.LOAD_RESIDENTS:
      return action.residents;
    default:
      return state;
  }
}

export function groupReducer(state = [],action){
  switch(action.type){
    case type.LOAD_PREFIXGRPS:
      return action.prefixGrps;
    default:
      return state;
  }
}

export function pathReducer(state = [],action){
  switch(action.type){
    case type.LOAD_PATHOLOGISTS:
      return action.pathologists;
    default:
      return state;
  }
}
