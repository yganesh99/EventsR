import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myOrders state domain
 */

const selectMyOrdersDomain = state => state.myOrders || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyOrders
 */

const makeSelectMyOrders = () =>
  createSelector(
    selectMyOrdersDomain,
    substate => substate,
  );

export default makeSelectMyOrders;
export { selectMyOrdersDomain };
