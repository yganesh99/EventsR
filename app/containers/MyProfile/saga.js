import { takeLatest, call, put } from 'redux-saga/effects';
import { URL } from '../../utils/constants';
import request from '../../utils/request';
import { GET_USER, UPDATE_USER } from './constants';
import {
  getUserSuccess,
  getUserError,
  updateUserSuccess,
  updateUserError,
} from './actions';

export function* getUser(action) {
  const userEmail = localStorage.getItem('userEmail');
  const requestURL = `${URL}/users/email/${userEmail}`;

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.accessToken}`,
    },
  };

  try {
    const result = yield call(request, requestURL, options);
    yield put(getUserSuccess(result));
  } catch (err) {
    const errorResponse = yield call([err.response, 'json']);
    yield put(getUserError(errorResponse));
  }
}

export function* updateUser(action) {
  const userId = action.data.userId;
  const requestURL = `${URL}/users/${userId}`;

  const options = {
    method: 'PUT',
    body: JSON.stringify(action.data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${localStorage.accessToken}`,
    },
  };

  try {
    const result = yield call(request, requestURL, options);
    yield put(updateUserSuccess(result));
  } catch (err) {
    const errorResponse = yield call([err.response, 'json']);
    yield put(updateUserError(errorResponse));
  }
}

export default function* myProfileSaga() {
  yield takeLatest(GET_USER, getUser);
  yield takeLatest(UPDATE_USER, updateUser);
}
