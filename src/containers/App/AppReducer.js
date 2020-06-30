import {
  CHANGE_VIEW,
  CHANGE_LOGIN_STATUS
} from './AppTypes';

const initialState = {
  view: 'login',
  isLoggedIn: false
}

const AppReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_VIEW:
      return {...state, view: action.payload};
    case CHANGE_LOGIN_STATUS:
      return {...state, isLoggedIn: action.payload};
    default:
      return state;
  }
}

export default AppReducer;