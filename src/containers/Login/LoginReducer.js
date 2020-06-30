import {
  CHANGE_LOGIN_PASSWORD,
  CHANGE_LOGIN_USERNAME,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './LoginTypes';

const initialState = {
  isPending: false,
  errors: []
}

const LoginReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_LOGIN_PASSWORD:
      return { ...state, passwordField: action.payload };
    case CHANGE_LOGIN_USERNAME:
      return { ...state, usernameField: action.payload };
    case LOGIN_PENDING:
      return { ...state, isPending: true };
    case LOGIN_SUCCESS:
      return { ...state, errors: [], isPending: false };
    case LOGIN_FAILED:
      return { ...state, errors: action.payload, isPending: false };
    default:
      return state;
  }
}

export default LoginReducer;