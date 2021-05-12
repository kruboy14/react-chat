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
  const scrollRef = React.useRef(null);

  const currentDialogID = useSelector(selectCurrentDialogID);
  const allMessages = useSelector(selectAllMessages);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUserData);

  const dispatch = useDispatch();
  React.useEffect(() => {
    // if (currentDialogID && !allMessages.length) {}
    if (currentDialogID) {
      dispatch(messagesActions.fetchMessages(currentDialogID));

      socket.emit('room', currentDialogID);
      socket.on('SERVER:MESSAGE_CREATED', (msg) => {
        dispatch(messagesActions.addMessage(msg));
      });
    }
    return () => {
      socket.emit('room', currentDialogID);
      socket.off('SERVER:MESSAGE_CREATED');
    };
  }, [currentDialogID, dispatch]);
  React.useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [allMessages]);

  return (
    <BaseMessages
      items={allMessages}
      isLoading={isLoading}
      scrollRef={scrollRef}
      user={user}
    />
  );
};

export default Messages;
