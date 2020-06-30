import {
  CHANGE_LOGIN_PASSWORD,
  CHANGE_LOGIN_USERNAME,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './LoginTypes';

import fetchServer from '../../fetchServer';

export const setLoginUsername = (text) => {
  return {
    type: CHANGE_LOGIN_USERNAME,
    payload: text
  }
}

export const setLoginPassword = (text) => {
  return {
    type: CHANGE_LOGIN_PASSWORD,
    payload: text
  }
}

export const login = (loginInfo, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });
    const data = await fetchServer('/login', {username: loginInfo, email: loginInfo, password});
    if(data.token !== undefined) {
      localStorage.setItem('token', data.token);
      dispatch({ type: LOGIN_SUCCESS });
    } else {
      dispatch({ type: LOGIN_FAILED, payload: data.error });
    }
  } catch {
    dispatch({ type: LOGIN_FAILED, payload: ['No response from server.'] });
  }
}