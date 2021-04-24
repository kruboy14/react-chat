import { createAction } from '@reduxjs/toolkit';
import { messagesApi } from 'utils/api';
import { MESSAGES_SET_ITEMS } from '../actionsTypes';

const Actions = {
  setMessages: createAction(MESSAGES_SET_ITEMS),
  fetchMessages: (dialogID) => async (dispatch) => {
    const response = await messagesApi.getByDialogID(dialogID);

    dispatch(Actions.setMessages(response.data));
  },
};

export default Actions;
