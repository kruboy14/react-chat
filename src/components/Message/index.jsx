import React from 'react';
import PropTypes from 'prop-types';

import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';

import './Message.scss';
import classNames from 'classnames';
import { IconRead, Time } from '..';
import { convertCurrentTime } from 'utils/helpers';

const Message = ({
  avatar,
  user,
  text,
  date,
  audio,
  isMe,
  isRead,
  attachments,
  isTyping,
}) => {
  const [isPlaying, setPlay] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [progressWidth, setProgressWidth] = React.useState(0);
  const audioElem = React.useRef(null);

  React.useEffect(() => {
    audioElem.current.addEventListener('loadeddata', () =>
      setCurrentTime(audioElem.current.duration),
    );
    audioElem.current.addEventListener('playing', () => setPlay(true));
    audioElem.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioElem.current.currentTime);
      const duration = audioElem.current.duration || 0;
      setProgressWidth((audioElem.current.currentTime / duration) * 100);
    });
    audioElem.current.addEventListener('ended', () => {
      setPlay(false);
      setProgressWidth(0);
    });
    audioElem.current.addEventListener('pause', () => setPlay(false));
  }, []);

  const onPlay = () => {
    audioElem.current.volume = '0.01';

    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  return (
    <div
      className={classNames('message', {
        'message-isme': isMe,
        'message-is-typing': isTyping,
        'message-image-one': attachments && attachments.length === 1,
        'message-is-audio': audio,
      })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
      </div>
      <div className="message__content">
        <div className="message__item">
          {(audio || text || isTyping) && (
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
              <audio ref={audioElem} src={audio} preload="auto"></audio>
              {audio && (
                <div className="message__audio">
                  <div
                    className="message__audio-progress"
                    style={{ width: progressWidth + '%' }}></div>
                  <div className="message__audio-info">
                    <div className="message__audio-btn">
                      <button onClick={onPlay}>
                        {isPlaying ? (
                          <img src={pauseSvg} alt="Pause svg" />
                        ) : (
                          <img src={playSvg} alt="Play svg" />
                        )}
                      </button>
                    </div>
                    <div className="message__audio-wave">
                      <img src={waveSvg} alt="Wave svg" />
                    </div>
                    <div className="message__audio-duration">
                      <span>{convertCurrentTime(currentTime)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => (
                <div key={item.filename} className="message__attachments__item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}
        </div>
        <span className="message__date">{date && <Time date={date} />}</span>
      </div>
      <IconRead isRead={isRead} />
    </div>
  );
};

const Message1 = ({
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

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => (
                <div key={item.filename} className="message__attachments__item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}
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
  date: PropTypes.string,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isRead: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
