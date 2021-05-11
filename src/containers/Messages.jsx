import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Messages as BaseMessages } from '../components';
import socket from '../core/socket';
import { messagesActions } from '../redux/actions';
import {
  selectAllMessages,
  selectCurrentDialogID,
  selectIsLoading,
} from '../redux/selectors';

const Messages = () => {
  const [filter, setFilter] = React.useState([]);
  const scrollRef = React.useRef(null);

  const currentDialogID = useSelector(selectCurrentDialogID);
  const AllMessages = useSelector(selectAllMessages);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (currentDialogID) {
      dispatch(messagesActions.fetchMessages(currentDialogID));

      socket.emit('room', currentDialogID);
      socket.on('SERVER:MESSAGE_CREATED', (data) =>
        dispatch(messagesActions.fetchMessages(currentDialogID)),
      );
      console.log(currentDialogID);
    }
    return () => {
      socket.emit('room', currentDialogID);
      socket.off('SERVER:MESSAGE_CREATED');
    };
  }, [currentDialogID, dispatch]);
  React.useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [AllMessages]);

  return (
    <BaseMessages
      items={AllMessages}
      isLoading={isLoading}
      scrollRef={scrollRef}
    />
  );
};

export default Messages;
