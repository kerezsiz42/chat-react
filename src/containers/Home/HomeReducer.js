import {
  MYCHATS_PENDING,
  MYCHATS_SUCCESS,
  MYCHATS_FAILED
} from './HomeTypes';

const initialState = {
  chats: [],
  isPending: false,
  errors: []
}

const HomeReducer = (state = initialState, action = {}) => {
  switch(action.type) {
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