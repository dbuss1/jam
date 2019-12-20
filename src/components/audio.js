import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { PLAYER_STATUSES } from '../constants';
import PlayerContext from '../playerContext';

const Audio = () => {
  const audioRef = useRef({});
  const { trackUrl, status, elapsed, setElapsed, duration, setDuration } = useContext(
    PlayerContext
  );

  const setAudioSrc = trackUrl => {
    audioRef.current.src = trackUrl;
    if (status === PLAYER_STATUSES.PLAYING) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', ({ target }) => {
      if (elapsed !== target.elapsed) {
        setElapsed(target.currentTime);
      }
      if (duration !== target.duration) {
        setDuration(target.duration);
      }
    });
    return () => {
      audioRef.current.removeEventListener('timeupdate', () => {});
    };
  }, [audioRef]);

  useEffect(() => {
    if (audioRef.current && audioRef.current.src) {
      const currentAudioSrc = new URL(audioRef.current.src);
      if (trackUrl && currentAudioSrc.pathname !== trackUrl) {
        setAudioSrc(trackUrl);
      }
    } else {
      if (trackUrl) {
        setAudioSrc(trackUrl);
      }
    }
  }, [audioRef, status, trackUrl]);

  useEffect(() => {
    if (status === PLAYER_STATUSES.PAUSED) {
      audioRef.current.pause();
    } else if (status === PLAYER_STATUSES.STOPPED) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // this.setState({ selectedTrack: null });
    } else if (status === PLAYER_STATUSES.PLAYING && audioRef.current.paused) {
      audioRef.current.play();
    }
  }, [audioRef, status]);

  return <audio ref={audioRef} />;
};

Audio.propTypes = {
  trackUrl: PropTypes.string,
  status: PropTypes.string
};

export default Audio;
