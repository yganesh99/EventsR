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
  DATA_CHANGE,
} from './constants';

export const initialState = {
  loading: false,
  successMessage: '',
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case REGISTER:
        draft.loading = true;
        break;
      case REGISTER_SUCCESS:
        draft.loading = false;
        draft.successMessage = action.payload._id
          ? 'Successfully registered.'
          : '';
        break;
      case REGISTER_ERROR:
        draft.loading = false;
        draft.errorMessage = action.payload.error ? action.payload.error : '';
        break;
      case DATA_CHANGE:
        if (action.fieldName === 'successMessage') {
          successMessage = action.fieldValue;
        }
        if (action.fieldName === 'errorMessage') {
          errorMessage = action.fieldValue;
        }
        break;
    }
  });

export default registerReducer;
