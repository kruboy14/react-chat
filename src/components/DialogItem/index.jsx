import React from 'react';

import './DialogItem.scss';
import { Time, IconRead, Avatar } from '..';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import { useDispatch } from 'react-redux';
import { dialogsActions } from '../../redux/actions';

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

const DialogItem = ({ _id, user, message, unread, isMe, onSelect }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames('dialog__item', {
        'dialog__item-online': user.isOnline,
        'dialog__item-notick-nocount': !unread && !isMe,
      })}
      onClick={() => dispatch(dialogsActions.setCurrentDialogID(_id))}>
      <div className="dialog__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`}/> */}
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
            <p>{message.text}</p>
          </div>
          <div className="dialog__item-content-tick">
            {isMe && <IconRead isRead={message.isRead} />}
          </div>
          {unread > 0 && (
            <div className="dialog__item-content-count">
              {unread > 9 ? '+9' : unread}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
