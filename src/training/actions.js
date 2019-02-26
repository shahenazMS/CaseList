import CaseApi from './api/mockCaseApi';
import ReferenceApi from './api/mockRefApi';
import * as type from './actionTypes';


export function loadCases(params) {
  return {
    type: type.LOAD_CASES,
    cases:CaseApi.getAllCases()
  };
}

export function loadPrefixes() {  
  return {
    type: type.LOAD_PREFIXES,
    prefixes:ReferenceApi.getPrefixes()
  };
}

export function loadPrefixGrps() {
  return {
    type: type.LOAD_PREFIXGRPS,
    prefixGrps:ReferenceApi.getPrefixGrps()
  };
}

export function loadPathologists() {
  return {
    type: type.LOAD_PATHOLOGISTS,
    pathologists:ReferenceApi.getPathologists()
  };
}

export function loadResidents() {
  return {
    type: type.LOAD_RESIDENTS,
    residents:ReferenceApi.getResidents()
  };
}
