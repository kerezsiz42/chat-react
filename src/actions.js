import { CHANGE_USERNAME_FIELD } from './constants';

export const setUsernameField = (text) => {
  console.log(text)
  return {
    type: CHANGE_USERNAME_FIELD,
    payload: text
  }
}