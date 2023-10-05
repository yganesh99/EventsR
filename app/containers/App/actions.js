import { SET_LOGIN } from './constants';

export function setLogin(data) {
  return {
    type: SET_LOGIN,
    data,
  };
}
