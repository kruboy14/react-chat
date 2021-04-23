import { createReducer } from '@reduxjs/toolkit';
import { DIALOGS_SET_ITEMS, DIALOGS_SET_СURRENT_DIALOG } from '../actionsTypes';

const initialState = {
  items: [],
  currentDialog: null,
};
const dialogsReducer = createReducer(initialState, {
  [DIALOGS_SET_ITEMS]: (state, action) => {
    state.items = action.payload;
  },
  [DIALOGS_SET_СURRENT_DIALOG]: (state, action) => {
    state.currentDialog = action.payload;
  },
});

export default dialogsReducer;
