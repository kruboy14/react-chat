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
import { Button, Input } from 'antd';

const ChatInput = (props) => {
  const [value, setValue] = React.useState('');
  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        <Button type="text" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        size="large"
        placeholder="Write a message..."
      />
      <div className="chat-input__actions">
        <Button type="text" icon={<CameraOutlined />} />
        {value ? (
          <Button type="text" icon={<SendOutlined />} />
        ) : (
          <Button type="text" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
