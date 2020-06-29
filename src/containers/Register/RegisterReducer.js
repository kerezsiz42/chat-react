import {
  CHANGE_PASSWORD_FIELD,
  CHANGE_USERNAME_FIELD,
  CHANGE_EMAIL_FIELD,
  CHANGE_SECOND_PASSWORD_FIELD,
  REGISTER_PENDING,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from './RegisterTypes';

const initialState = {
  usernameField: '',
  passwordField: '',
  emailField: '',
  secondPasswordField: '',
  isPending: false,
  error: ''
}

const RegisterReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_USERNAME_FIELD:
      return { ...state, usernameField: action.payload };
    case CHANGE_PASSWORD_FIELD:
      return { ...state, passwordField: action.payload };
    case CHANGE_EMAIL_FIELD:
      return { ...state, emailField: action.payload };
    case CHANGE_SECOND_PASSWORD_FIELD:
      return { ...state, secondPasswordField: action.payload };
    case REGISTER_PENDING:
      return { ...state, isPending: true };
    case REGISTER_SUCCESS:
      return { ...state, isPending: false };
    case REGISTER_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
}

export default RegisterReducer;