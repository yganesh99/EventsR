/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  DATA_CHANGE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function login(data) {
  return {
    type: LOGIN,
    data,
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginError(payload) {
  return {
    type: LOGIN_ERROR,
    payload,
  };
}

export function dataChange(fieldName, fieldValue) {
  return {
    type: DATA_CHANGE,
    fieldName,
    fieldValue,
  };
}
