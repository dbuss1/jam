import React, { useContext, useRef } from 'react';
import Icon from './icon';
import PlayerContext from '../playerContext';
import { timeString } from '../formatters';
import { PLAYER_STATUSES, TRACKS } from '../constants';

export const CURRENTLY_PLAYING_HEIGHT = 50;
const BALL_SIZE = 10;

const ProgressBar = () => {
  const progressBarRef = useRef(null);
  const { elapsed, duration, setSeekingTo } = useContext(PlayerContext);

  const handleClick = e => {
    let clickedPercent =
      (e.clientX - progressBarRef.current.offsetLeft) / progressBarRef.current.offsetWidth;
    clickedPercent = Math.max(0, clickedPercent);
    clickedPercent = Math.min(1, clickedPercent);
    setSeekingTo(clickedPercent * duration);
  };

  return (
    <div className="progress-bar" ref={progressBarRef} onClick={handleClick}>
      <div className="progress-bg" />
      <div className="progress-fg" />
      <div className="ball" />
      <style jsx>
        {`
          .progress-bar {
            width: 100%;
            min-width: 100px;
            margin: 0 12px;
            padding: 8px 0;
            position: relative;
            cursor: pointer;
          }
          .progress-bg {
            background-color: #ccc;
            width: 100%;
            height: 1px;
          }
          .progress-fg {
            background-color: orange;
            width: ${(elapsed / duration) * 100}%;
            height: 1px;
            margin-top: -1px;
          }
          .ball {
            border-radius: 50%;
            width: ${BALL_SIZE}px;
            height: ${BALL_SIZE}px;
            background: orange;
            position: absolute;
            left: calc(${(elapsed / duration) * 100}% - ${BALL_SIZE / 2}px);
            top: ${BALL_SIZE / 2 - 1}px;
          }
        `}
      </style>
    </div>
  );
};

const CurrentlyPlaying = () => {
  const { status, setStatus, trackUrl, elapsed, duration } = useContext(PlayerContext);

  const currentTrack = TRACKS.filter(track => track.url === trackUrl)[0] || {
    title: '',
    artist: ''
  };
  const isPlaying = status === PLAYER_STATUSES.PLAYING;

  return (
    <div className="currently-playing">
      <div className="content">
        <div className="controls">
          <button>
            <Icon type="skipBackward" />
          </button>
          <button
            onClick={() => setStatus(isPlaying ? PLAYER_STATUSES.PAUSED : PLAYER_STATUSES.PLAYING)}
          >
            <Icon type={isPlaying ? 'pause' : 'play'} />
          </button>
          <button>
            <Icon type="skipForward" />
          </button>
        </div>
        <div className="progress-bar-wrapper">
          <span>{timeString(elapsed || 0)}</span>
          <ProgressBar />
          <span>{timeString(duration || 0)}</span>
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
          height: ${CURRENTLY_PLAYING_HEIGHT}px;
          width: 100%;
          background: #141414;
        }
        .content {
          height: ${CURRENTLY_PLAYING_HEIGHT}px;
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .controls {
          margin: 0 1rem;
          display: flex;
        }
        .controls button {
          border: none;
          outline: none;
          background: none;
          margin: 0 8px;
          padding: 0;
          cursor: pointer;
        }
        .progress-bar-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .progress-bar-wrapper span {
          font-size: 12px;
        }
        .details {
          margin: 0 1rem;
          width: 360px;
          display: flex;
          flex-direction: column;
        }
        .details span {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .details .artist {
          color: #ccc;
          font-size: 80%;
        }
      `}</style>
    </div>
  );
};

export default CurrentlyPlaying;
