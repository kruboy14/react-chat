import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

import dialogs from './reducers/dialogs';
import messages from './reducers/messages';
import user from './reducers/user';
import attachments from './reducers/attachments';
const store = configureStore({
  reducer: {
    dialogs,
    messages,
    user,
    attachments
  },
});

export default store;
