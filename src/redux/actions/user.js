import { createAction } from '@reduxjs/toolkit';
import { userApi } from 'utils/api';
import { USER_SET_DATA, USER_SET_IS_AUTH } from '../actionsTypes';

import { openNotification } from 'utils/helpers';

const Actions = {
  setUserData: createAction(USER_SET_DATA),
  setIsAuth: createAction(USER_SET_IS_AUTH),
  fetchUserData: () => async (dispatch) => {
    try {
      const { data } = await userApi.getMe();
      dispatch(Actions.setUserData(data));
    } catch ({ response }) {
      if (response.status === 403) {
        dispatch(Actions.setIsAuth(false));
        delete window.localStorage['token'];
      }
    }
  },
  fetchUserLogin: (postData) => async (dispatch) => {
    try {
      const { data } = await userApi.login(postData);
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
  fetchUserRegister: (postData) => async (dispacth) => {
    try {
      const { data } = await userApi.register(postData);
      console.log('register', data);
    } catch ({ response }) {
      console.log(response);
      openNotification({
        title: 'Regestration Error',
        text: 'Wrong form for registration',
        type: 'error',
      });
    }
  },
};

export default Actions;
