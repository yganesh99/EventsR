import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ProductTypes state domain
 */

const selectProductTypesDomain = state => state.ProductTypes || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductTypes
 */

const makeSelectProductTypes = () =>
  createSelector(
    selectProductTypesDomain,
    substate => substate,
  );

export default makeSelectProductTypes;
export { selectProductTypesDomain };
