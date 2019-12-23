import React, { useContext } from 'react';
import Icon from './icon';
import PlayerContext from '../playerContext';
import { timeString } from '../formatters';
import { PLAYER_STATUSES, TRACKS } from '../constants';

const CurrentlyPlaying = () => {
  const { status, setStatus, trackUrl, elapsed, duration } = useContext(PlayerContext);

  const currentTrack = TRACKS.filter(track => track.url === trackUrl)[0];
  const isPlaying = status === PLAYER_STATUSES.PLAYING;

  return currentTrack ? (
    <div className="currently-playing">
      <div className="content">
        <div className="controls">
          <button
            onClick={() => setStatus(isPlaying ? PLAYER_STATUSES.PAUSED : PLAYER_STATUSES.PLAYING)}
          >
            <Icon type={isPlaying ? 'pause' : 'play'} />
          </button>
          <button onClick={() => setStatus(PLAYER_STATUSES.STOPPED)}>
            <Icon type="stop" />
          </button>
        </div>
        <div>
          <span>
            {timeString(elapsed)} / {timeString(duration)}
          </span>
        </div>
        <div className="details">
          <span className="artist">{currentTrack.artist}</span>
          <span className="song">{currentTrack.title}</span>
        </div>
      </div>
      <style jsx>{`
        .currently-playing {
          position: fixed;
          bottom: 0;
          height: 50px;
          width: 100%;
          background: #141414;
        }
        .content {
          height: 50px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .controls {
          margin: 0 1rem;
          width: 100px;
        }
        .controls button {
          border: none;
          outline: none;
          background: none;
          margin: 0 4px;
          padding: 0;
          cursor: pointer;
        }
        .details {
          width: 360px;
          display: flex;
          flex-direction: column;
        }
        .details .artist {
          opacity: 0.7;
          font-size: 90%;
        }
      `}</style>
    </div>
  ) : null;
};

export default CurrentlyPlaying;
