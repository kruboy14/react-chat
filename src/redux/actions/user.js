import { createAction } from '@reduxjs/toolkit';
import { userApi } from '../../utils/api';
import { USER_SET_DATA } from '../actionsTypes';

const Actions = {
  setUserData: createAction(USER_SET_DATA),
  fetchUserLogin: (postData) => async (dispatch) => {
    try {
      const { data } = await userApi.login(postData);
      dispatch(Actions.setUserData(data));
    } catch (error) {
      console.error(error);
    }
  },
};

export default Actions;
