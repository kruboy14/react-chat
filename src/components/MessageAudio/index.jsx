import React from 'react';
import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';
import { convertCurrentTime } from 'utils/helpers';

const MessageAudio = ({ audioSrc }) => {
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
      setProgressWidth(
        (audioElem.current.currentTime / duration) * 100 + duration * 0.3,
      );
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
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload="auto"></audio>
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
  );
};

export default MessageAudio;
