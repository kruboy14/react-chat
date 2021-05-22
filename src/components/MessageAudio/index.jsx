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
  console.log('currentTime', currentTime);
  const handleLoadedMeta = () => {
    if (audioElem.current?.duration === Infinity) {
      audioElem.current.currentTime = 1e5;
      setTimeout(() => {
        setCurrentTime(audioElem.current?.currentTime);
        audioElem.current.currentTime = 0;
      }, 0);
    }
    setCurrentTime(audioElem.current?.duration);
  };

  const handleTimeupdate = () => {
    if (!audioElem.current.paused) {
      setCurrentTime(audioElem.current.currentTime);
      const duration = audioElem.current.duration || 0;
      console.log(
        ((audioElem.current.currentTime + 0.4) / duration) * 100,
        'duration',
      );
      setProgressWidth(
        ((audioElem.current.currentTime + 0.33) / duration) * 100,
      );
    }
  };

  const handlePlaying = () => {
    setPlay(true);
  };

  const handlePause = () => {
    setPlay(false);
  };
  const handleEnded = () => {
    setPlay(false);
    setProgressWidth(0);
  };

  React.useEffect(() => {
    if (audioElem.current !== null) {
      audioElem.current.addEventListener('canplaythrough', handleLoadedMeta);
      audioElem.current.addEventListener('timeupdate', handleTimeupdate);
      audioElem.current.addEventListener('playing', handlePlaying);
      audioElem.current.addEventListener('ended', handleEnded);
      audioElem.current.addEventListener('pause', handlePause);
    }
    return () => {};
  }, [audioElem]);

  const onPlay = () => {
    audioElem.current.volume = '0.11';

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
          <span>{currentTime < 1000 && convertCurrentTime(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageAudio;
