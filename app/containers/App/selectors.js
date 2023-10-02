/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalDomain = state => state.global || initialState;

const makeSelectApp = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate,
  );

export default makeSelectApp;
export { selectGlobalDomain };