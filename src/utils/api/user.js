import { axios } from '../../core';

const userApi = {
  login: (postData) => axios.post('/user/login', postData),
  register: (postData) => axios.post('/user/regestration', postData),
  verifyHash: (hash) => axios.get(`/user/verify?hash=${hash}`),
  getMe: () => axios.get('/user/me'),
  searchUser: (query) => axios.get('/user/find?query=' + query),
};
export default userApi;
