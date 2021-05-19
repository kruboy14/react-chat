import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'emoji-mart';

import {
  SmileOutlined,
  CameraOutlined,
  SendOutlined,
  AudioOutlined,
} from '@ant-design/icons';

import './ChatInput.scss';
import { Button, Input } from 'antd';
import { Upload, UploadFiles } from '..';

import TextArea from 'antd/lib/input/TextArea';

const ChatInput = ({
  onSentMessage,

  emojiPickerVisible,
  hanldeEmojiSelect,
  toggleEmojiPicker,
  setValue,
  value,
  handleSendMsg,
  handleSendMsgBtn,
  attachments,
}) => {
  return (
    <div className="chat-input">
      <div className="chat-input__content">
        <div className="chat-input__smile">
          {emojiPickerVisible && (
            <div className="chat-input__emoji-picker">
              <Picker
                set="apple"
                onSelect={hanldeEmojiSelect}
                showPreview={false}
                showSkinTones={false}
              />
            </div>
          )}
          <Button
            onClick={toggleEmojiPicker}
            type="text"
            icon={<SmileOutlined />}
          />
        </div>
        <TextArea
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={handleSendMsg}
          value={value}
          size="large"
          placeholder="Write a message..."
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
        <div className="chat-input__actions">
          <Upload>
            <Button type="text" icon={<CameraOutlined />} />
          </Upload>
          {value ? (
            <Button
              type="text"
              icon={<SendOutlined />}
              onClick={handleSendMsgBtn}
            />
          ) : (
            <Button type="text" icon={<AudioOutlined />} />
          )}
        </div>
      </div>
      <div className="chat-input-upload-img">
        <UploadFiles />
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
