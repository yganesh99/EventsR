import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myAccount state domain
 */

const selectMyAccountDomain = state => state.myAccount || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyAccount
 */

const makeSelectMyAccount = () =>
  createSelector(
    selectMyAccountDomain,
    substate => substate,
  );

export default makeSelectMyAccount;
export { selectMyAccountDomain };
