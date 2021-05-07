import { axios } from '../../core';

const userApi = {
  login: (postData) => axios.post('/user/login', postData),
  getMe: (postData) => axios.get('/user/me'),
};
export default userApi;
