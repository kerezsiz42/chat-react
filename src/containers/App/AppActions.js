import {
  CHANGE_VIEW,
  CHANGE_LOGIN_STATUS
} from './AppTypes';

export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    payload: view
  }
}

export const changeLoginStatus = (isLoggedIn) => {
  return {
    type: CHANGE_LOGIN_STATUS,
    payload: isLoggedIn
  }
}