import { takeLatest, call, put } from 'redux-saga/effects';
import { URL } from '../../utils/constants';
import request from '../../utils/request';
import { LOGIN } from './constants';
import { loginSuccess, loginError } from './actions';

export function* login(action) {
  const requestURL = `${URL}/login`;

  const options = {
    method: 'POST',
    body: JSON.stringify(action.data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const result = yield call(request, requestURL, options);
    yield put(loginSuccess(result));
  } catch (err) {
    const errorResponse = yield call([err.response, 'json']);
    console.log(errorResponse);
    yield put(loginError(errorResponse));
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, login);
}
