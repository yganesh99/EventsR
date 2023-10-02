import {
    SET_LOGIN_SUCCESS,
    SET_LOGOUT_SUCCESS,
} from './constants'


export function setLoginSuccess(data) {
    return {
      type: SET_LOGIN_SUCCESS,
      data
    };
}

export function setLogoutSuccess(payload) {
    return {
      type: SET_LOGOUT_SUCCESS,
      payload
    };
}