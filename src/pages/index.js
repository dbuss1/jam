import React, { useState } from 'react';
import Head from 'next/head';
import Audio from '../components/audio';
import Nav from '../components/nav';
import Waveform from '../components/waveform';
import { PLAYER_STATUSES, TRACKS } from '../constants';

const App = () => {
  const [currentTrack, setCurrentTrack] = useState({});
  const [playerStatus, setPlayerStatus] = useState(PLAYER_STATUSES.STOPPED);

  return (
    <div>
      <Head>
        <title>🌶️ 🐅</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Nav />

      <header>
        <h1>🌶️ 🐅</h1>
      </header>

      <section>
        {TRACKS.map((track, i) => (
          <div
            className="track-wrapper"
            onClick={() => {
              setPlayerStatus(PLAYER_STATUSES.PLAYING);
              setCurrentTrack(track);
            }}
            key={`track-wrapper-${i}`}
          >
            <h3 className="track-title">{track.title}</h3>
            <Waveform trackUrl={track.url} />
          </div>
        ))}
      </section>

      <div>
        {/* TODO: move to component */}
        {playerStatus === PLAYER_STATUSES.PAUSED && (
          <button onClick={() => setPlayerStatus(PLAYER_STATUSES.PLAYING)}>Play</button>
        )}
        {playerStatus === PLAYER_STATUSES.PLAYING && (
          <button onClick={() => setPlayerStatus(PLAYER_STATUSES.PAUSED)}>Pause</button>
        )}
        {playerStatus === PLAYER_STATUSES.PLAYING || playerStatus === PLAYER_STATUSES.PAUSED ? (
          <button onClick={() => setPlayerStatus(PLAYER_STATUSES.STOPPED)}>Stop</button>
        ) : null}
      </div>

      <Audio trackUrl={currentTrack.url} status={playerStatus} />

      <style jsx>{`
        :global(body) {
          background: #282831;
          color: white;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        header > h1 {
          text-align: center;
          font-size: 48px;
        }
        section {
          text-align: center;
        }
        .track-wrapper {
          margin: 0 16px 32px;
          overflow: hidden;
        }
        .track-title {
          font-weight: normal;
          text-align: left;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default App;
