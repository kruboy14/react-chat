import { axios } from '../../core';

const userApi = {
  login: (postData) => axios.post('/user/login', postData),
};
export default userApi;
