import {
  CHANGE_VIEW
} from './AppTypes';

const initialState = {
  view: 'login'
}

const AppReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_VIEW:
      return {...state, view: action.payload};
    default:
      return state;
  }
}

export default AppReducer;