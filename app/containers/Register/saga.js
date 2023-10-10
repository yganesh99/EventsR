import { takeLatest, call, put } from 'redux-saga/effects';
import { URL } from '../../utils/constants';
import request from '../../utils/request';
import { REGISTER } from './constants';
import { registerSuccess, registerError } from './actions';

export function* register(action) {
  const requestURL = `${URL}/register`;

  const options = {
    method: 'POST',
  };

  try {
    const result = yield call(request, requestURL, options);
    yield put(registerSuccess(result));
  } catch (err) {
    console.log(err);
    yield put(registerError(err));
  }
}

export default function* registerSaga() {
  yield takeLatest(REGISTER, register);
}
