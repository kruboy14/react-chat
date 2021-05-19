import { createAction } from '@reduxjs/toolkit';
import {
  ATTACHMENTS_ADD_FILE,
  ATTACHMENTS_REMOVE_FILE,
  ATTACHMENTS_ClEAR,
} from '../actionsTypes';

const Actions = {
  addAttachment: createAction(ATTACHMENTS_ADD_FILE),
  removeAttachment: createAction(ATTACHMENTS_REMOVE_FILE),
  clear: createAction(ATTACHMENTS_ClEAR),
};

export default Actions;
