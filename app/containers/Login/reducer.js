/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  DATA_CHANGE,
} from './constants';

export const initialState = {
  loading: false,
  successMessage: '',
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGIN:
        draft.loading = true;
        break;
      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.successMessage = action.payload.accessToken
          ? 'Successfully logged in.'
          : '';
        action.payload.accessToken
          ? localStorage.setItem('accessToken', action.payload.accessToken)
          : null;
        action.payload.accessToken
          ? localStorage.setItem('isLoggedIn', true)
          : null;
        action.payload.name
          ? localStorage.setItem('username', action.payload.name)
          : null;
        action.payload.email
          ? localStorage.setItem('userEmail', action.payload.email)
          : null;
        break;
      case LOGIN_ERROR:
        draft.loading = false;
        draft.errorMessage = action.payload.error ? action.payload.error : '';
        console.log('lasd', draft.errorMessage);
        break;
      case DATA_CHANGE:
        if (action.fieldName === 'successMessage') {
          draft.successMessage = action.fieldValue;
        }
        if (action.fieldName === 'errorMessage') {
          draft.errorMessage = action.fieldValue;
        }
        break;
    }
  });

export default loginReducer;
