import { axios } from '../../core';

const messagesApi = {
  getByDialogID: (id) => axios.get('/messages?dialog=' + id),
  removeById: (id) => axios.delete(`/messages/?id=${id}`),
  send: (text, dialogiID, attachments) =>
    axios.post('/messages', {
      text,
      dialog_id: dialogiID,
      attachments
    }),
  unreadMsg: (dialogId, userId) => axios.get(`/messages/unreadMsg?dialogId=${dialogId}&userId=${userId}` )
};
export default messagesApi;
