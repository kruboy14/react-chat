import React from 'react';

import './DialogItem.scss';
import { Time, IconRead } from '..';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
const getAvatar = (avatar) => {
  if (avatar) {
    return <img src={avatar} alt="" />;
  } else {
    // make
  }
};

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

const DialogItem = ({ user, message, unread, isMe }) => {
  return (
    <div
      className={classNames('dialog__item', {
        'dialog__item-online': user.isOnline,
        'dialog__item-notick-nocount': !unread && !isMe,
      })}>
      <div className="dialog__item-avatar">
        {/* <img src={user.avatar} alt={`${user.fullname} avatar`}/> */}
        {getAvatar(
          'https://99px.ru/sstorage/1/2010/04/image_10704101336437444814.jpg',
        )}
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
