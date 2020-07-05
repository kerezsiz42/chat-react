import {
  CHANGE_APP_VIEW,
  LOGOUT
} from './AppTypes';

export const changeAppView = (view) => {
  return {
    type: CHANGE_APP_VIEW,
    payload: view
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: LOGOUT
  }
}