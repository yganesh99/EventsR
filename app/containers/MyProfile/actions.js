/*
 *
 * MyProfile actions
 *
 */

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

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getUser(data) {
  return {
    type: GET_USER,
    data,
  };
}

export function getUserSuccess(payload) {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
}

export function getUserError(payload) {
  return {
    type: GET_USER_ERROR,
    payload,
  };
}

export function updateUser(data) {
  return {
    type: UPDATE_USER,
    data,
  };
}

export function updateUserSuccess(payload) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload,
  };
}

export function updateUserError(payload) {
  return {
    type: UPDATE_USER_ERROR,
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
