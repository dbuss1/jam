import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { PLAYER_STATUSES } from '../constants';
import PlayerContext from '../playerContext';

const Audio = () => {
  const audioRef = useRef({});
  const {
    trackUrl,
    status,
    setStatus,
    setElapsed,
    duration,
    setDuration,
    seekingTo,
    setSeekingTo
  } = useContext(PlayerContext);

  useEffect(() => {
    if (status === PLAYER_STATUSES.PAUSED) {
      audioRef.current.pause();
    } else if (status === PLAYER_STATUSES.PLAYING) {
      audioRef.current.play();
    }
  }, [audioRef, status, trackUrl]);

  useEffect(() => {
    if (audioRef && Number.isFinite(seekingTo)) {
      audioRef.current.currentTime = seekingTo;
      setElapsed(seekingTo);
      setSeekingTo(undefined);
    }
  }, [audioRef, seekingTo]);

  const handleLoadedMetadata = ({ target }) => {
    if (target.duration && duration !== target.duration) {
      setDuration(target.duration);
    }
  };

  const handleTimeUpdate = ({ target }) => {
    setElapsed(target.currentTime);
  };

  const handleEnded = () => {
    setStatus(PLAYER_STATUSES.PAUSED);
  };

  return (
    <audio
      ref={audioRef}
      src={trackUrl}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};

Audio.propTypes = {
  trackUrl: PropTypes.string,
  status: PropTypes.string
};

export default Audio;
