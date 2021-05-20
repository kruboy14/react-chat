import { Button } from 'antd';
import React from 'react';
import './Recording.scss';
import { CloseCircleOutlined } from '@ant-design/icons';

const Recording = ({ handleStopRecording }) => {
  return (
    <div className="chat-input__recording-field">
      <i></i>
      <span>Recording...</span>
      <Button
        onClick={handleStopRecording}
        icon={<CloseCircleOutlined />}
        className="chat-input__recording-close"></Button>
    </div>
  );
};

export default Recording;
