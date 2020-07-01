import {
  MYCHATS_PENDING,
  MYCHATS_SUCCESS,
  MYCHATS_FAILED,
  CHANGE_HOME_VIEW
} from './HomeTypes';

import fetchServer from '../../fetchServer';

export const changeHomeView = (view) => {
  return {
    type: CHANGE_HOME_VIEW,
    payload: view
  }
}

export const myChats = (token) => async (dispatch) => {
  try {
    dispatch({ type: MYCHATS_PENDING });
    const data = await fetchServer('/myChats', {token});
    if(data.success) {
      dispatch({ type: MYCHATS_SUCCESS, payload: data.success });
    } else {
      dispatch({ type: MYCHATS_FAILED, payload: data.error });
    }
  } catch(error) {
    dispatch({ type: MYCHATS_FAILED, payload: error });
  }
}