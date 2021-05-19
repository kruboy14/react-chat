import { createReducer } from '@reduxjs/toolkit';
import {
  ATTACHMENTS_ADD_FILE,
  ATTACHMENTS_ClEAR,
  ATTACHMENTS_REMOVE_FILE,
} from '../actionsTypes';

const initialState = {
  items: [],
};
const attachmentsReducer = createReducer(initialState, {
  [ATTACHMENTS_ADD_FILE]: (state, action) => {
    state.items.push(action.payload);
  },
  [ATTACHMENTS_REMOVE_FILE]: (state, action) => {
    state.items = state.items.filter((item) => item._id !== action.payload.uid);
  },
  [ATTACHMENTS_ClEAR]: (state, action) => {
    state.items = [];
  },
});

export default attachmentsReducer;
