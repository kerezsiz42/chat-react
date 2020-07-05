import {
  CHANGE_APP_VIEW,
  LOGOUT
} from './AppTypes';

const initialState = {
  view: 'login'
}

const AppReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case LOGOUT:
      return {...state, view: 'login'}
    case CHANGE_APP_VIEW:
      return {...state, view: action.payload};
    default:
      return state;
  }
}

export default AppReducer;