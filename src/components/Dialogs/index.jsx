import React from 'react';

import './Dialogs.scss';
import { DialogItem } from '..';
import orderBy from 'lodash/orderBy';
import { Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const Dialogs = ({ items, user, onChange, inputValue }) => {
  return (
    <React.Fragment>
      <div className="chat__sidebar-search">
        <Input
          placeholder="Message Search"
          onChange={onChange}
          prefix={<SearchOutlined />}
          value={inputValue}
        />
      </div>
      <div className="dialogs">
        {items.length ? (
          orderBy(
            items,
            (item) => {
              return Date.parse(item.createdAt);
            },
            'desc',
          ).map((item) => (
            <DialogItem
              _id={item._id}
              key={item._id}
              user={item.author._id === user._id ? item.partner : item.author}
              message={item.lastMessage}
              unread={0}
              isMe={item.author._id === user._id}
            />
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Nothing found"
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Dialogs;
