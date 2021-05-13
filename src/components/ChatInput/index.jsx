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
import { Upload } from '..';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCurrentDialogID } from 'redux/selectors';
import { messagesActions } from 'redux/actions';

const ChatInput = ({ onSentMessage }) => {
  const [value, setValue] = React.useState('');
  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);

  const toggleEmojiPicker = () => setEmojiPickerVisible(!emojiPickerVisible);
  const dispatch = useDispatch();
  const currentDialogID = useSelector(selectCurrentDialogID);

  const handleSendMsg = (e) => {
    if (e.key === 'Enter' && value) {
      dispatch(messagesActions.fetchSendMessage(value, currentDialogID));
      setValue('');
    }
  };
  if(!currentDialogID) {
    return <div/>
  }
  return (
    <div className="chat-input">
      <div className="chat-input__smile">
        {emojiPickerVisible && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" showPreview={false} showSkinTones={false} />
          </div>
        )}
        <Button
          onClick={toggleEmojiPicker}
          type="text"
          icon={<SmileOutlined />}
        />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleSendMsg}
        value={value}
        size="large"
        placeholder="Write a message..."
      />
      <div className="chat-input__actions">
        <Upload>
          <Button type="text" icon={<CameraOutlined />} />
        </Upload>
        {value ? (
          <Button type="text" icon={<SendOutlined />}  onClick={handleSendMsg}/>
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
