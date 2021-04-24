import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Messages as BaseMessages } from '../components';
import { messagesActions } from '../redux/actions';
import { selectAllMessages, selectCurrentDialogID } from '../redux/selectors';

const Messages = () => {
  const [filter, setFilter] = React.useState([]);

  const currentDialogID = useSelector(selectCurrentDialogID);
  const AllMessages = useSelector(selectAllMessages);
  console.log(currentDialogID);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (currentDialogID)
      dispatch(messagesActions.fetchMessages(currentDialogID));
  }, [currentDialogID, dispatch]);

  return <BaseMessages items={AllMessages}/>;
};

export default Messages;
