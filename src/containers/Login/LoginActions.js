import {
  CHANGE_USERNAME_FIELD,
  CHANGE_PASSWORD_FIELD,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './LoginTypes';

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

export const login = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN_PENDING });
  fetch(`${process.env.REACT_APP_API}/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(data => {
      if(data.token !== undefined) {
        dispatch({ type: LOGIN_SUCCESS, payload: data.token });
      } else {
        throw Error('No token received.');
      }
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILED, payload: error });
    });
}