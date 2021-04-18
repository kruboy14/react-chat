import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  SmileOutlined,
  CameraOutlined,
  SendOutlined,
  AudioOutlined,
} from '@ant-design/icons';

import './ChatInput.scss';
import { Input } from 'antd';

const ChatInput = (props) => {
  const [value, setValue] = React.useState('');
  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        <SmileOutlined />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        size="large"
        placeholder="Write a message..."
      />
      <div className="chat-input__actions">
        <CameraOutlined />
        {value ? <SendOutlined /> : <AudioOutlined />}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
