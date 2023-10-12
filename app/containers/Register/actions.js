/*
 *
 * Register actions
 *
 */

import {
  DEFAULT_ACTION,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  DATA_CHANGE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function register(data) {
  return {
    type: REGISTER,
    data,
  };
}

export function registerSuccess(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
}

export function registerError(payload) {
  return {
    type: REGISTER_ERROR,
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
