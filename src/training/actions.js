import CaseApi from './api/mockCaseApi';

export const LOAD_CASES = 'LOAD_CASES';

export function loadCases(params) {
  debugger;
  return {
    type: LOAD_CASES,
    cases:CaseApi.getAllCases()
  };
}
