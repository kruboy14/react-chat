import { createReducer } from '@reduxjs/toolkit';
import { USER_SET_DATA } from '../actionsTypes';

const initialState = {
  data: null,
  isAuth: window.localStorage.token ? true : false,
  // isAuth: false,
  token: window.localStorage.token,
};
const messagesReducer = createReducer(initialState, {
  [USER_SET_DATA]: (state, action) => {
    state.data = action.payload;
    state.isAuth = true;
    state.token = window.localStorage.token;
  },
});

export default messagesReducer;
