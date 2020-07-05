import {
  MYCHATS_PENDING,
  MYCHATS_SUCCESS,
  MYCHATS_FAILED,
  CHANGE_HOME_VIEW,
  CHANGE_CURRENT_CHAT,
  TOGGLE_MENU_STATUS
} from './HomeTypes';

const initialState = {
  chats: [],
  isPending: false,
  errors: [],
  view: 'conversations',
  currentChat: null,
  isMenuOn: false
}

const HomeReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case TOGGLE_MENU_STATUS:
      if(state.isMenuOn) {
        return {...state, isMenuOn: false};
      } else {
        return {...state, isMenuOn: true};
      }
    case CHANGE_CURRENT_CHAT:
      return {...state, currentChat: action.payload};
    case CHANGE_HOME_VIEW:
      return {...state, view: action.payload};
    case MYCHATS_PENDING:
      return {...state, isPending: true};
    case MYCHATS_SUCCESS:
      return {...state, isPending: false, chats: action.payload, errors: []};
    case MYCHATS_FAILED:
      return {...state, isPending: false, errors: action.payload};
    default:
      return state;
  }
}

export default HomeReducer;