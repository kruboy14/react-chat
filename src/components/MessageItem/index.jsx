import React from 'react';
import { Popover } from 'antd';
import { Emoji } from 'emoji-mart';
import classNames from 'classnames';
import reactStringReplace from 'react-string-replace';

import { useDispatch } from 'react-redux';
import { messagesActions } from '../../redux/actions';
import { MessageAudio, TypingMessage } from '..';
import MessagePopover from '../Popover';

const MessageItem = ({
  audio,
  text,
  isTyping,
  isMe,
  id,
  attachments,
  setPreviewImage,
}) => {
  const [valuePopup, setValuePopup] = React.useState(false);
  const handleVisibleChange = (visible) => {
    setValuePopup(visible);
  };
  // refactor
  const dispatch = useDispatch();
  const deleteMessage = () => {
    dispatch(messagesActions.removeMessageByID(id));
    setValuePopup(false);
  };
  return (
    <MessagePopover
      isPopover={isMe}
      valuePopup={valuePopup}
      handleVisibleChange={handleVisibleChange}
      deleteMessage={deleteMessage}>
      <div className="message__item">
        {(audio || text || isTyping) && (
          <div className={classNames({ 'message__bubble me': isMe })}>
            {text ?? (
              <p className="message__text">
                {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                  <Emoji key={i} emoji={match} set="apple" size={16} />
                ))}
              </p>
            )}

            {isTyping && <TypingMessage />}

            {audio && <MessageAudio audioSrc={audio} />}
          </div>
        )}
        {attachments && (
          <div
            className={classNames('message__attachments', {
              'message__attachments-no-text': !text,
            })}>
            {attachments.map((item) => (
              <div key={item.filename} className="message__attachments__item">
                <img
                  onClick={() => setPreviewImage(item.url)}
                  src={item.url}
                  alt={item.filename}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </MessagePopover>
  );
};

export default MessageItem;
