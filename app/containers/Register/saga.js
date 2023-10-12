import { takeLatest, call, put } from 'redux-saga/effects';
import { URL } from '../../utils/constants';
import request from '../../utils/request';
import { REGISTER } from './constants';
import { registerSuccess, registerError } from './actions';

export function* register(action) {
  const requestURL = `${URL}/register`;

  const options = {
    method: 'POST',
    body: JSON.stringify(action.data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  };

  try {
    const result = yield call(request, requestURL, options);
    yield put(registerSuccess(result));
  } catch (err) {
    const errorResponse = yield call([err.response, 'json']);
    yield put(registerError(errorResponse));
  }
}

export default function* registerSaga() {
  yield takeLatest(REGISTER, register);
}
