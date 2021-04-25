import { createAction } from '@reduxjs/toolkit';
import { messagesApi } from 'utils/api';
import { MESSAGES_SET_ITEMS, MESSAGES_SET_LOADING } from '../actionsTypes';

const Actions = {
  setMessages: createAction(MESSAGES_SET_ITEMS),
  setIsLoading: createAction(MESSAGES_SET_LOADING),
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
