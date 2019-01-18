import CaseApi from './api/mockCaseApi';

export const LOAD_CASES = 'LOAD_CASES';

export function loadCases() {
  return {
    type: LOAD_CASES,
    cases:CaseApi.getAllCases()
  };
}
