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
import { Recording, Upload, UploadFiles } from '..';

import TextArea from 'antd/lib/input/TextArea';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectAttachments } from '../../redux/selectors';

const ChatInput = ({
  onSentMessage,
  setchecker,
  emojiPickerVisible,
  hanldeEmojiSelect,
  toggleEmojiPicker,
  setValue,
  value,
  handleSendMsg,
  handleSendMsgBtn,
  isRecording,
  handleStopRecording,
  onRecord,
}) => {
  const attachments = useSelector(selectAttachments);
  const dispatch = useDispatch();
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
        {isRecording ? (
          <Recording handleStopRecording={handleStopRecording} />
        ) : (
          <TextArea
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleSendMsg}
            value={value}
            size="large"
            placeholder="Write a message..."
            autoSize={{ minRows: 1, maxRows: 4 }}
          />
        )}
        <div className="chat-input__actions">
          <Upload>
            <Button type="text" icon={<CameraOutlined />} />
          </Upload>
          {value || isRecording || attachments.length ? (
            <Button
              type="text"
              icon={<SendOutlined />}
              onClick={handleSendMsgBtn}
            />
          ) : (
            <Button
              onClick={onRecord}
              type="text"
              icon={<AudioOutlined />}
            />
          )}
        </div>
      </div>
      <div className="chat-input-upload-img">
        {attachments.length ? <UploadFiles setchecker={setchecker} /> : null}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
