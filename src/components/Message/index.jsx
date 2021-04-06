import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow  from "date-fns/formatDistanceToNow";
import readTick from 'assets/img/double-tick-indicator.svg';
import sentTick from 'assets/img/single-tick-indicator.svg';


import './Message.scss';
import classNames from 'classnames';

const Message = ({ avatar, user, text, date, isMe, isRead }) => {
  return (
    <div className={classNames("message", {"message-isme": isMe})}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
      </div>
      <div className="message__content">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">{formatDistanceToNow(date, { addSuffix: true })}</span>
      </div>
      {isMe && isRead ? <img className="message__checkedTick" src={readTick} alt=""/> : <img className="message__checkedTick" src={sentTick} alt=""/>}

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
};

export default Message;
