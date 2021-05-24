import { createReducer } from '@reduxjs/toolkit';
import { USER_SET_DATA, USER_SET_IS_AUTH } from '../actionsTypes';

const initialState = {
  data: {},
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
  [USER_SET_IS_AUTH]: (state, action) => {
    state.isAuth = action.payload;
  },
});

export default messagesReducer;
