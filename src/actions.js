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

const fetchServer = (endpoint, params) => {
  return fetch(process.env.REACT_APP_API+endpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  }).then(response => response.json());
}

export const changeView = (view) => {
  return {type: CHANGE_VIEW, payload: view}
}
export const logout = () => {
  localStorage.removeItem('token');
  return {type: LOGOUT}
}
export const changeModalView = (view) => {
  return {type: CHANGE_MODAL_VIEW, payload: view}
}


// Login
export const changeLoginData = (loginData) => {
  return {type: CHANGE_LOGIN_DATA, payload: loginData}
}
export const login = (loginInfo, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });
    const data = await fetchServer('/login', {username: loginInfo, email: loginInfo, password});
    if(data.token !== undefined) {
      localStorage.setItem('token', data.token);
      dispatch({ type: LOGIN_SUCCESS });
    } else {
      dispatch({ type: LOGIN_FAILED, payload: data.error });
    }
  } catch {
    dispatch({ type: LOGIN_FAILED, payload: ['No response from server.'] });
  }
}

// Register
export const changeRegisterData = (registerData) => {
  return {type: CHANGE_REGISTER_DATA, payload: registerData}
}
export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PENDING });
    const data = await fetchServer('/register', {username, email, password})
    if(data.success !== undefined) {
      dispatch({ type: REGISTER_SUCCESS });
    } else {
      dispatch({ type: REGISTER_FAILED, payload: data.error });
    }
  } catch {
    dispatch({ type: REGISTER_FAILED, payload: ['Error while fetching data.'] });
  }
}

// Conversations
export const changeCurrentChat = (chat) => {
  return {type: CHANGE_CURRENT_CHAT, payload: chat}
}
export const toggleMenuStatus = () => {
  return {type: TOGGLE_MENU_STATUS}
}
export const myChats = () => async (dispatch) => {
  try {
    dispatch({ type: MYCHATS_PENDING });
    const token = localStorage.getItem('token');
    const data = await fetchServer('/myChats', {token});
    if(data.success) {
      dispatch({ type: MYCHATS_SUCCESS, payload: data.success });
    } else {
      dispatch({ type: MYCHATS_FAILED, payload: data.error });
    }
  } catch {
    dispatch({ type: MYCHATS_FAILED, payload: ['Error while fetching data.'] });
  }
}
export const createChat = (chatName) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CHAT_PENDING });
    const token = localStorage.getItem('token');
    const data = await fetchServer('/createChat', {token, chatName});
    if(data.success) {
      dispatch({ type: CREATE_CHAT_SUCCESS, payload: data.success });
    } else {
      dispatch({ type: CREATE_CHAT_FAILED, payload: data.error });
    }
  } catch {
    dispatch({ type: CREATE_CHAT_FAILED, payload: ['Error while fetching data.'] });
  }
}
// Messages

// Users