import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Messages as BaseMessages } from '../components';
import socket from '../core/socket';
import { messagesActions } from '../redux/actions';
import {
  selectAllMessages,
  selectCurrentDialogID,
  selectIsLoading,
  selectUserData,
} from '../redux/selectors';

const Messages = () => {
  const [filter, setFilter] = React.useState([]);
  const [previewImage, setPreviewImage] = React.useState(null);
  const scrollRef = React.useRef(null);

  const user = useSelector(selectUserData);
  const currentDialogID = useSelector(selectCurrentDialogID);
  const allMessages = useSelector(selectAllMessages);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  React.useEffect(() => {
    (async () => {
      if (currentDialogID) {
        await dispatch(messagesActions.fetchMessages(currentDialogID));

        socket.emit('room', currentDialogID);
        socket.on('SERVER:MESSAGE_CREATED', async (msg) => {
          await dispatch(messagesActions.addMessage(msg));
          console.log('msg', msg);
          console.log('user', user);
          if (user && msg.user._id !== user._id) {
            messagesActions.readSentMsg(msg.dialog._id);
          }
        });
        socket.on('SERVER:MESSAGES_READED', (userId) => {
          dispatch(messagesActions.myMsgRead(userId));
        });
      }
    })();
    return () => {
      socket.emit('room', currentDialogID);
      socket.off('SERVER:MESSAGE_CREATED');
      socket.off('SERVER:MESSAGES_READED');
    };
  }, [currentDialogID, dispatch, user]);
  React.useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [allMessages]);

  return (
    <BaseMessages
      items={allMessages}
      isLoading={isLoading}
      scrollRef={scrollRef}
      user={user}
      previewImage={previewImage}
      setPreviewImage={setPreviewImage}
    />
  );
};

export default Messages;
