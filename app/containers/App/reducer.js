/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SET_LOGIN_SUCCESS, SET_LOGOUT_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  isLoggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_LOGIN_SUCCESS:
        draft.isLoggedIn = true;
        break;
      case SET_LOGOUT_SUCCESS:
        draft.isLoggedIn = false;
        break;
    }
  });

export default appReducer;
