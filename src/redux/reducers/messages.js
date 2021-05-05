import { createReducer } from '@reduxjs/toolkit';
import { MESSAGES_SET_ITEMS, MESSAGES_SET_LOADING } from '../actionsTypes';

const initialState = {
  items: null,
  isLoading: false,
};
const messagesReducer = createReducer(initialState, {
  [MESSAGES_SET_ITEMS]: (state, action) => {
    state.items = action.payload;
    state.isLoading = false;
  },
  [MESSAGES_SET_LOADING]: (state, action) => {
    state.isLoading = action.payload;
  },
});

export default messagesReducer;
