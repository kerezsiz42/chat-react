import {
  CHANGE_APP_VIEW
} from './AppTypes';

export const changeAppView = (view) => {
  return {
    type: CHANGE_APP_VIEW,
    payload: view
  }
}