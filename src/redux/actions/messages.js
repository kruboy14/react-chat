import { createAction } from '@reduxjs/toolkit';
import { messagesApi } from 'utils/api';
import {
  MESSAGES_SET_ITEMS,
  MESSAGES_SET_LOADING,
  MESSAGE_ADD_ITEM,
  MESSAGE_READ_ALL_MY,
  MESSAGE_REMOVE_ITEM,
} from '../actionsTypes';

const Actions = {
  setMessages: createAction(MESSAGES_SET_ITEMS),
  setIsLoading: createAction(MESSAGES_SET_LOADING),
  addMessage: createAction(MESSAGE_ADD_ITEM),
  myMsgRead: createAction(MESSAGE_READ_ALL_MY),
  removeMessage: createAction(MESSAGE_REMOVE_ITEM),
  readSentMsg: async (dialogId) => {
   await messagesApi.getByDialogID(dialogId);
  },
  fetchSendMessage: (text, dialogID) => (dispatch) => {
    return messagesApi.send(text, dialogID);
  },
  removeMessageByID: (id) => async (dispatch) => {
    const { data } = await messagesApi.removeById(id);
    dispatch(Actions.removeMessage(id));
  },
  fetchMessages: (dialogID) => async (dispatch) => {
    dispatch(Actions.setIsLoading(true));
    try {
      const response = await messagesApi.getByDialogID(dialogID);
      dispatch(Actions.setMessages(response.data));
    } catch (error) {
      dispatch(Actions.setIsLoading(false));
      console.error(error);
    }
  },
};

export default Actions;
