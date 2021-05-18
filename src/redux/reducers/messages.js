import { createReducer } from '@reduxjs/toolkit';
import {
  MESSAGES_SET_ITEMS,
  MESSAGES_SET_LOADING,
  MESSAGE_ADD_ITEM,
  MESSAGE_READ_ALL_MY,
  MESSAGE_REMOVE_ITEM,
} from '../actionsTypes';

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
  [MESSAGE_ADD_ITEM]: (state, action) => {
    state.items.push(action.payload);
  },
  [MESSAGE_REMOVE_ITEM]: (state, action) => {
    state.items = state.items.filter((item) => {
      return item._id !== action.payload;
    });
  },
  [MESSAGE_READ_ALL_MY]: (state, action) => {
    state.items = state.items.map((item) => {
      if (item.user._id !== action.payload) {
        item.read = true;
        return item;
      } else {
        return item;
      }
    });
  },
});

export default messagesReducer;
