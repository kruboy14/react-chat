import { createAction } from '@reduxjs/toolkit';
import { userApi } from 'utils/api';
import { USER_SET_DATA } from '../actionsTypes';

import { openNotification } from 'utils/helpers';

const Actions = {
  setUserData: createAction(USER_SET_DATA),
  fetchUserData: () => async (dispatch) => {
    const { data } = await userApi.getMe();
    dispatch(Actions.setUserData(data));
  },
  fetchUserLogin: (postData) => async (dispatch) => {
    try {
      const { data } = await userApi.login(postData);
      // dispatch(Actions.setUserData(data));
      window.axios.defaults.headers.common['token'] = data.token;
      window.localStorage['token'] = data.token;
      dispatch(Actions.fetchUserData(data));
      openNotification({
        title: 'Success',
        text: 'Successful Authorization',
        type: 'success',
      });
    } catch ({ response }) {
      openNotification({
        title: 'Error',
        text: 'Wrong password or email',
        type: 'error',
      });
    }
  },
};

export default Actions;
