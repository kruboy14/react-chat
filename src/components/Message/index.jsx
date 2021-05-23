import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';
import classNames from 'classnames';
import { Avatar, IconRead, Time, TypingMessage } from '..';
import MessageItem from '../MessageItem';

const Message = ({
  avatar,
  user,
  text,
  date,
  audio,
  isMe,
  read,
  attachments,
  isTyping,
  id,
  setPreviewImage,
}) => {
  return (
    <div
      className={classNames('message', {
        'message-isme': isMe,
        'message-is-typing': isTyping,
        'message-image-one': attachments && !text && attachments.length === 1,
        'message-is-audio': audio,
      })}>
      <div className="message__avatar">
        <Avatar user={user} />
      </div>
      <div className="message__content">
        <MessageItem
          key={id}
          audio={audio}
          text={text}
          isTyping={isTyping}
          isMe={isMe}
          id={id}
          attachments={attachments}
          setPreviewImage={setPreviewImage}
        />
        <span className="message__date">{date && <Time date={date} />}</span>
      </div>
      {isMe && <IconRead isRead={read} />}
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.string,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isRead: PropTypes.bool,
  audio: PropTypes.bool,
};

export default Message;
