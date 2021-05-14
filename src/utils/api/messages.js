import { axios } from '../../core';

const messagesApi = {
  getByDialogID: (id) => axios.get('/messages?dialog=' + id),
  removeById: (id) => axios.delete(`/messages/?id=${id}`),
  send: (text, dialogiID) =>
    axios.post('/messages', {
      text,
      dialog_id: dialogiID,
    }),
};
export default messagesApi;
