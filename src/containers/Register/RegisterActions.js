import {
  CHANGE_USERNAME_FIELD,
  CHANGE_PASSWORD_FIELD,
  CHANGE_EMAIL_FIELD,
  CHANGE_SECOND_PASSWORD_FIELD,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from './RegisterTypes';

import fetchServer from '../../fetchServer';

export const setUsernameField = (text) => {
  return {
    type: CHANGE_USERNAME_FIELD,
    payload: text
  }
}

export const setPasswordField = (text) => {
  return {
    type: CHANGE_PASSWORD_FIELD,
    payload: text
  }
}

export const setEmailField = (text) => {
  return {
    type: CHANGE_EMAIL_FIELD,
    payload: text
  }
}

export const setSecondPasswordField = (text) => {
  return {
    type: CHANGE_SECOND_PASSWORD_FIELD,
    payload: text
  }
}

export const register = (username, email, password) => (dispatch) => {
  dispatch({ type: REGISTER_PENDING });
  return fetchServer('/register', {username, email, password})
    .then(data => {
      if(data.success !== undefined) {
        dispatch({ type: REGISTER_SUCCESS });
      } else {
        Promise.reject(data.error);
      }
    })
    .catch(error => {
      dispatch({ type: REGISTER_FAILED, payload: error });
    });
}