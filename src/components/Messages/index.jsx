import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import { Message } from '..';
import { LoadingOutlined } from '@ant-design/icons';

const Messages = ({ scrollRef, isLoading, items }) => {
  return (
    <div ref={scrollRef} className="chat__dialog-messages-box">
      {isLoading ? (
        <Spin
          className="messages-spin"
          tip="Loading messages"
          indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />}
        />
      ) : items ? (
        items.length > 0 ? (
          items.map((item) => <Message {...item} />)
        ) : (
          <Empty description="No message" />
        )
      ) : (
        <Empty description="Open dialog" />
      )}
    </div>
  );
};
Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;