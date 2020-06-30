import {
  MYCHATS_PENDING,
  MYCHATS_SUCCESS,
  MYCHATS_FAILED
} from './HomeTypes';

import fetchServer from '../../fetchServer';

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