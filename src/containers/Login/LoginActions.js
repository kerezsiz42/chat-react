import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './LoginTypes';

import fetchServer from '../../fetchServer';


export const login = (loginInfo, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_PENDING });
    const data = await fetchServer('/login', {username: loginInfo, email: loginInfo, password});
    if(data.token !== undefined) {
      localStorage.setItem('token', data.token);
      dispatch({ type: LOGIN_SUCCESS });
    } else {
      throw Error('No token received.');
    }
  } catch(error) {
    dispatch({ type: LOGIN_FAILED, payload: error });
  }
}