import { createReducer } from '@reduxjs/toolkit';
import { MESSAGES_SET_ITEMS } from '../actionsTypes';

const initialState = {
  items: null,
};
const messagesReducer = createReducer(initialState, {
  [MESSAGES_SET_ITEMS]: (state, action) => {
    state.items = action.payload;
  },
});

export default messagesReducer;