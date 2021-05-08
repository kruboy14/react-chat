import { createReducer } from '@reduxjs/toolkit';
import { DIALOGS_SET_ITEMS, DIALOGS_SET_СURRENT_DIALOG_ID } from '../actionsTypes';

const initialState = {
  items: null,
  currentDialogID: null,
};
const dialogsReducer = createReducer(initialState, {
  [DIALOGS_SET_ITEMS]: (state, action) => {
    state.items = action.payload;
  },
  [DIALOGS_SET_СURRENT_DIALOG_ID]: (state, action) => {
    state.currentDialogID = action.payload;
  },
});

export default dialogsReducer;
