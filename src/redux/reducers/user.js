import { createReducer } from '@reduxjs/toolkit';
import { USER_SET_DATA } from '../actionsTypes';

const initialState = {
  data: null,
};
const messagesReducer = createReducer(initialState, {
  [USER_SET_DATA]: (state, action) => {
    state.data = action.payload;
  },
});

export default messagesReducer;
