import {
  CHANGE_VIEW,
  LOGOUT,
  CHANGE_MODAL_VIEW,
  // Login
  CHANGE_LOGIN_DATA,
  LOGIN_PENDING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  // Register
  CHANGE_REGISTER_DATA,
  REGISTER_PENDING,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  // Conversations
  MYCHATS_PENDING,
  MYCHATS_SUCCESS,
  MYCHATS_FAILED,
  CHANGE_CURRENT_CHAT,
  TOGGLE_MENU_STATUS,
  CREATE_CHAT_PENDING,
  CREATE_CHAT_FAILED,
  CREATE_CHAT_SUCCESS,
  // Messages

  // Users
} from './types';

const initialState = {
  view: 'login',
  isPending: false,
  errors: [],
  loginData: {},
  registerData: {},
  chats: [],
  currentChat: null,
  isMenuOn: false,
  modalView: '',
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case LOGOUT:
      return {...state, view: 'login'};
    case CHANGE_VIEW:
      return {...state, view: action.payload, errors: [], isMenuOn: false};
    case CHANGE_MODAL_VIEW:
      return {...state, modalView: action.payload, errors: [], isMenuOn: false};
    // Login
    case CHANGE_LOGIN_DATA:
      return { ...state, loginData: action.payload };
    case LOGIN_PENDING:
      return { ...state, isPending: true };
    case LOGIN_SUCCESS:
      return { ...state, errors: [], isPending: false };
    case LOGIN_FAILED:
      return { ...state, errors: action.payload, isPending: false };
    // Register
    case CHANGE_REGISTER_DATA:
      return { ...state, registerData: action.payload };
    case REGISTER_PENDING:
      return { ...state, isPending: true };
    case REGISTER_SUCCESS:
      return { ...state, errors: [], isPending: false };
    case REGISTER_FAILED:
      return { ...state, errors: action.payload, isPending: false };
    // Conversations
    case TOGGLE_MENU_STATUS:
      return {...state, isMenuOn: !state.isMenuOn};
    case CHANGE_CURRENT_CHAT:
      return {...state, currentChat: action.payload};
    case MYCHATS_PENDING:
      return {...state, isPending: true};
    case MYCHATS_SUCCESS:
      return {...state, isPending: false, chats: action.payload, errors: []};
    case MYCHATS_FAILED:
      return {...state, isPending: false, errors: action.payload};
    case CREATE_CHAT_PENDING:
      return {...state, isPending: true};
    case CREATE_CHAT_FAILED:
      return {...state, isPending: false, errors: action.payload};
    case CREATE_CHAT_SUCCESS:
      return {...state, isPending: false, modalView: ''};
    // Messages

    // Users
    default:
      return state;
  }
}

export default reducer;