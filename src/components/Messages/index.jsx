import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import { Message } from '..';
import { LoadingOutlined } from '@ant-design/icons';

const Messages = ({ isLoading, items }) => {

  return isLoading && !items.length ? (
    <Spin className="messages-spin" tip="Loading messages" indicator={<LoadingOutlined style={{ fontSize: 46 }} spin />} />
  ) : items.length ? (
    items.map((item) => <Message {...item} />)
  ) : (
    <Empty description="No message" />
  );
};
Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
