import {
  CHANGE_VIEW
} from './AppTypes';

export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    payload: view
  }
}