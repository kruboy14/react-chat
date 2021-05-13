import { axios } from '../../core';

const dialogsApi = {
  getAll: () => axios.get('/dialogs'),
  create: ({ partner, text }) => axios.post('/dialogs', { partner, text }),
};
export default dialogsApi;
