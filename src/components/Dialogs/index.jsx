import React from 'react';

import './Dialogs.scss';
import { DialogItem } from '..';
import orderBy from 'lodash/orderBy';
import { Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const Dialogs = ({ items, userID, onChange, inputValue }) => {
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
      
      {items.length ? 
        orderBy(
          items,
          (item) => {
            return Date.parse(item.lastMessage.createdAt);
          },
          'desc',
        ).map((item, index) => (
         
          <DialogItem
            _id={item.user._id}
            // temp key till Mongo connect
            key={item._id || index}
            user={item.user}
            message={item.lastMessage}
            unread={0}
            isMe={item.user._id === userID}
          />
        )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}  description="Nothing found"/>}
    </div>
    </React.Fragment>
  );
};

export default Dialogs;
