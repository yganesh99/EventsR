/*
 *
 * Register reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case REGISTER:
        break;
      case REGISTER_SUCCESS:
        break;
      case REGISTER_ERROR:
        break;
    }
  });

export default registerReducer;
