/*
 *
 * MyProfile reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DATA_CHANGE,
} from './constants';

export const initialState = {
  loading: false,
  user: {},
  successMessage: '',
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const myProfileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_USER:
        draft.loading = true;
        break;
      case GET_USER_SUCCESS:
        draft.loading = false;
        draft.user = action.payload ? action.payload : {};
        break;
      case GET_USER_ERROR:
        draft.loading = false;
        draft.errorMessage = action.payload.error ? action.payload.error : '';
        break;
      case UPDATE_USER:
        draft.loading = true;
        break;
      case UPDATE_USER_SUCCESS:
        draft.loading = false;
        draft.successMessage = action.payload._id
          ? 'Successfully updated profile details'
          : {};
        break;
      case UPDATE_USER_ERROR:
        draft.loading = false;
        draft.errorMessage = action.payload.error ? action.payload.error : '';
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

export default myProfileReducer;
