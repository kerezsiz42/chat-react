import {
  CHANGE_REGISTER_USERNAME,
  CHANGE_REGISTER_PASSWORD,
  CHANGE_EMAIL_FIELD,
  CHANGE_SECOND_PASSWORD_FIELD,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from './RegisterTypes';

import fetchServer from '../../fetchServer';

export const setUsernameField = (text) => {
  return {
    type: CHANGE_REGISTER_USERNAME,
    payload: text
  }
}

export const setPasswordField = (text) => {
  return {
    type: CHANGE_REGISTER_PASSWORD,
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

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PENDING });
    const data = await fetchServer('/register', {username, email, password})
    if(data.success !== undefined) {
      dispatch({ type: REGISTER_SUCCESS });
    } else {
      dispatch({ type: REGISTER_FAILED, payload: data.error });
    }
  } catch {
    dispatch({ type: REGISTER_FAILED, payload: ['No response from server.'] });
  }
}