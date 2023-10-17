import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myOrder state domain
 */

const selectMyOrderDomain = state => state.myOrder || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyOrder
 */

const makeSelectMyOrder = () =>
  createSelector(
    selectMyOrderDomain,
    substate => substate,
  );

export default makeSelectMyOrder;
export { selectMyOrderDomain };
