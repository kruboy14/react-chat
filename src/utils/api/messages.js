import { axios } from '../../core';

const messagesApi = {
  getByDialogID: (id) => axios.get('/messages?dialog=' + id),
  send: (text, dialogiID) =>
    axios.post('/messages', {
      text,
      dialog_id: dialogiID,
    }),
};
export default messagesApi;
