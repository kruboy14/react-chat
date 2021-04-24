import {axios} from '../../core';

const messagesApi = {
  getByDialogID: (id) => axios.get('/messages?dialog=' + id),
};
export default messagesApi;
