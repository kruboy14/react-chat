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
  const renderAttachment = (item) => {
    
    if (item.ext === 'ogg' || item.ext === 'webm') {
      return (
        <div className="message__item">
          <div className="message__bubble">
            <MessageAudio key={item._id} audioSrc={item.url} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="message__attachments">
          <div key={item._id} className="message__attachments__item">
            <img
              onClick={() => setPreviewImage(item.url)}
              src={item.url}
              alt={item.filename}
            />
          </div>
        </div>
      );
    }
  };
  return (
    <MessagePopover
      key={id}
      isPopover={isMe}
      valuePopup={valuePopup}
      handleVisibleChange={handleVisibleChange}
      deleteMessage={deleteMessage}>
      <div className="message__item">
        {(text || isTyping) && (
          <div className={classNames("message__bubble",{ 'me': isMe })}>
            {text ?? (
              <p className="message__text">
                {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                  <Emoji key={i} emoji={match} set="apple" size={16} />
                ))}
              </p>
            )}

            {isTyping && <TypingMessage />}
          </div>
        )}

        {attachments && attachments.map((item) => renderAttachment(item))}
      </div>
    </MessagePopover>
  );
};

export default MessageItem;
