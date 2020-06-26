import {
  CHANGE_USERNAME_FIELD,
  CHANGE_PASSWORD_FIELD,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './LoginTypes';

const initialState = {
  usernameField: '',
  passwordField: '',
  isPending: false,
  token: '',
  error: ''
}

const LoginReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_USERNAME_FIELD:
      return { ...state, usernameField: action.payload };
    case CHANGE_PASSWORD_FIELD:
      return { ...state, passwordField: action.payload };
    case LOGIN_PENDING:
      return { ...state, isPending: true };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, isPending: false };
    case LOGIN_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
}

export default LoginReducer;