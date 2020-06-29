import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './LoginTypes';

const initialState = {
  isPending: false,
  error: ''
}

const LoginReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case LOGIN_PENDING:
      return { ...state, isPending: true };
    case LOGIN_SUCCESS:
      return { ...state, isPending: false };
    case LOGIN_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
}

export default LoginReducer;