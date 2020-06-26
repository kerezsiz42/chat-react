import { CHANGE_USERNAME_FIELD } from './constants';

const initialState = {
  usernameField: ''
}

export const xyz = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_USERNAME_FIELD:
      return { ...state, usernameField: action.payload };
    default:
      return state;
  }
}