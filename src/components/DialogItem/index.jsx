import React from 'react';

import './DialogItem.scss';
import { Time, IconRead, Avatar } from '..';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import socket from 'core/socket';
import { useDispatch, useSelector } from 'react-redux';
import { dialogsActions } from '../../redux/actions';
import { selectCurrentDialogID } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import reactStringReplace from 'react-string-replace';
import { Emoji } from 'emoji-mart';
import { dialogsApi, messagesApi } from '../../utils/api';

const getMessageTime = (createdAt) => {
  if (typeof createdAt === 'string') {
    createdAt = Date.parse(createdAt);
  }
  if (isToday(createdAt)) {
    return format(createdAt, 'HH:mm a');
  } else if (isThisWeek(createdAt)) {
    return format(createdAt, 'E');
  } else {
    return format(createdAt, 'dd.MM.yyyy');
  }
};

const DialogItem = ({ _id, user, message, isMe, onSelect }) => {
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = React.useState(null);
  const [unread, setUnread] = React.useState(null);
  const currentDialogID = useSelector(selectCurrentDialogID);
  const handleMsgCreated = async (msg) => {
    await dispatch(dialogsActions.fetchDialogs());
    const { data } = await messagesApi.unreadMsg(_id, user._id);
    console.log(currentDialogID === _id);
    if (currentDialogID === _id) {
      setNewMessage(0);
    } else {
      setNewMessage(data);
    }
  };

  React.useEffect(() => {
    (async () => {
      socket.emit('room', _id);
      socket.on(`SERVER:MESSAGE_CREATED/${_id}`, handleMsgCreated);
    })();
    // return () => {
    //   socket.emit('room', _id);
    //   socket.off(`SERVER:MESSAGE_CREATED/${_id}`, handleMsgCreated);
    // };
  }, [_id]);
  React.useEffect(() => {
    if (currentDialogID === _id) {
      setNewMessage(0);
    }
  }, [currentDialogID, _id]);
  return (
    <Link to={`/dialog/${_id}`}>
      <div
        className={classNames('dialog__item', {
          'dialog__item-online': user.isOnline,
          active: currentDialogID === _id,
          'dialog__item-notick-nocount': !unread && !isMe,
        })}>
        <div className="dialog__item-avatar">
          <Avatar user={user} />
        </div>
        <div className="dialog__item-content">
          <div className="dialog__item-content-top">
            <div className="dialog__item-content-name">
              <span>{user.fullname}</span>
            </div>
            <div className="dialog__item-content-time">
              {getMessageTime(message.createdAt)}
            </div>
          </div>
          <div className="dialog__item-content-bottom">
            <div className="dialog__item-content-text">
              {message.attachments?.length > 0 ? (
                <p>File</p>
              ) : (
                <p>
                  {reactStringReplace(message.text, /:(.+?):/g, (match, i) => (
                    <Emoji key={i} emoji={match} set="apple" size={16} />
                  ))}
                </p>
              )}
            </div>
            <div className="dialog__item-content-tick">
              {isMe && <IconRead isRead={message.read} />}
            </div>
            {newMessage > 0 && (
              <div className="dialog__item-content-count">
                {newMessage > 9 ? '+9' : newMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DialogItem;
