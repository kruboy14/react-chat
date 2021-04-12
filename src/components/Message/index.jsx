import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import readTick from 'assets/img/double-tick-indicator.svg';
import sentTick from 'assets/img/single-tick-indicator.svg';

import './Message.scss';
import classNames from 'classnames';

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
      })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
      </div>
      <div className="message__content">
        <div className="message__item">
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <div id="wave">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </div>
              </div>
            )}
          </div>
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments__item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
        </div>
        <span className="message__date">
          {date && formatDistanceToNow(date, { addSuffix: true })}
        </span>
      </div>
      {isRead === 'sent' ? (
        <img className="message__checkedTick" src={sentTick} alt="" />
      ) : isRead === 'read' ? (
        <img className="message__checkedTick" src={readTick} alt="" />
      ) : undefined}
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
};

export default Message;
