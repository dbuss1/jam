import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PLAYER_STATUSES } from '../constants';

const Audio = ({ trackUrl, status }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (trackUrl && audioRef.current.src !== trackUrl) {
      audioRef.current.src = trackUrl;
    }
  }, [trackUrl]);

  useEffect(() => {
    console.log('audio effect! status:', status);
    if (status === PLAYER_STATUSES.PAUSED) {
      audioRef.current.pause();
    } else if (status === PLAYER_STATUSES.STOPPED) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // this.setState({ selectedTrack: null });
    } else if (status === PLAYER_STATUSES.PLAYING && audioRef.current.paused) {
      audioRef.current.play();
    }
  }, [status]);

  return <audio ref={audioRef} />;
};

Audio.propTypes = {
  trackUrl: PropTypes.string,
  status: PropTypes.string
};

export default Audio;