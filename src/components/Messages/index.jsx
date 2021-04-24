import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { Message } from '..';



const Messages = ({ items }) => {
  console.log("items",items);
  return items ? (
    <div>
      {items.map((item) => (
      
        <Message {...item} />
      ))}
    </div>
  ) : (
    <Empty description="No message" />
  );
};
Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
