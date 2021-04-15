import React from 'react';

import './Dialogs.scss';
import classNames from 'classnames';
import { DialogItem } from '..';
import orderBy from 'lodash/orderBy';
const Dialogs = ({ items, userID }) => {
  return (
    <div className="dialogs">
      {items &&
        orderBy(
          items,
          (item) => {
            return Date.parse(item.lastMessage.createdAt);
          },
          'desc',
          ).map((item, index) => (
            <DialogItem
            // temp key till Mongo connect
            key={item._id || index}
            user={item.user}
            message={item.lastMessage}
            unread={0}
            isMe={item.user._id === userID}
          />
        ))}
    </div>
  );
};

export default Dialogs;
