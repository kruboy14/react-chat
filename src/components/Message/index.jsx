import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';
import classNames from 'classnames';
import { IconRead, Time } from '..';


const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isRead,
  attachments,
  isTyping,
}) => {
  return (
    <div
      className={classNames('message', {
        'message-isme': isMe,
        'message-is-typing': isTyping,
        'message-image-one': attachments && attachments.length === 1,
      })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
      </div>
      <div className="message__content">
        <div className="message__item">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <div id="wave">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div key={item.filename} className="message__attachments__item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
        </div>
        <span className="message__date">{date && <Time date={date} />}</span>
      </div>
      <IconRead isRead={isRead} />
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
  date: PropTypes.number,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isRead: PropTypes.string,
};

export default Message;
