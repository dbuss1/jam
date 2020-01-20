import React, { useRef, useEffect, useContext } from 'react';
import { PLAYER_STATUSES } from '../constants';
import PlayerContext from '../playerContext';

const Audio = () => {
  const audioRef = useRef({});
  const {
    curTrack,
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
  }, [audioRef, status, curTrack]);

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
      src={curTrack.url}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};

export default Audio;
