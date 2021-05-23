import { createAction } from '@reduxjs/toolkit';
import { dialogsApi } from 'utils/api';
import { DIALOGS_SET_ITEMS, DIALOGS_SET_СURRENT_DIALOG_ID,  } from '../actionsTypes';

const Actions = {
  setDialogs: createAction(DIALOGS_SET_ITEMS),
  setCurrentDialogID: createAction(DIALOGS_SET_СURRENT_DIALOG_ID),
  fetchDialogs: () => async (dispatch) => {
    const response = await dialogsApi.getAll();
    dispatch(Actions.setDialogs(response.data));
  },
};

export default Actions;
