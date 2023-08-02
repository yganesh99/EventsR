import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productCategories state domain
 */

const selectProductCategoriesDomain = state =>
  state.productCategories || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductCategories
 */

const makeSelectProductCategories = () =>
  createSelector(
    selectProductCategoriesDomain,
    substate => substate,
  );

export default makeSelectProductCategories;
export { selectProductCategoriesDomain };
