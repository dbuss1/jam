import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { PLAYER_STATUSES } from '../constants';
import PlayerContext from '../playerContext';

const Audio = () => {
  const audioRef = useRef({});
  const {
    trackUrl,
    status,
    elapsed,
    setElapsed,
    duration,
    setDuration,
    seekingTo,
    setSeekingTo,
    changeTrack
  } = useContext(PlayerContext);

  //////////////////
  // debugging
  useEffect(() => {
    console.log('status change!', status);
  }, [status]);

  useEffect(() => {
    console.log('trackUrl change!', trackUrl);
  }, [trackUrl]);

  useEffect(() => {
    console.log('elapsed change!', elapsed);
  }, [elapsed]);

  useEffect(() => {
    console.log('duration change!', duration);
  }, [duration]);

  useEffect(() => {
    console.log('seekingTo change!', seekingTo);
  }, [seekingTo]);
  //////////////////

  useEffect(() => {
    if (status === PLAYER_STATUSES.PAUSED) {
      audioRef.current.pause();
    } else if (status === PLAYER_STATUSES.STOPPED) {
      audioRef.current.pause();
      changeTrack();
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
    if (elapsed !== target.elapsed) {
      setElapsed(target.currentTime);
    }
  };

  return (
    <audio
      ref={audioRef}
      src={trackUrl}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleTimeUpdate}
    />
  );
};

Audio.propTypes = {
  trackUrl: PropTypes.string,
  status: PropTypes.string
};

export default Audio;
