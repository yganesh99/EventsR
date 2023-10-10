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
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function register() {
  return {
    type: REGISTER,
    data,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
}

export function registerError() {
  return {
    type: REGISTER_ERROR,
    payload,
  };
}
