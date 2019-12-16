import React, { useState } from 'react';
import Head from 'next/head';
import Audio from '../components/audio';
import Nav from '../components/nav';
import Waveform from '../components/waveform';
import { PLAYER_STATUSES, TRACKS } from '../constants';
import PlayerContext from '../playerContext';

const App = () => {
  const [status, setStatus] = useState(PLAYER_STATUSES.STOPPED);
  const [title, setTitle] = useState();
  const [trackUrl, setTrackUrl] = useState();
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState();

  return (
    <PlayerContext.Provider
      value={{
        status,
        setStatus,
        title,
        setTitle,
        trackUrl,
        setTrackUrl,
        elapsed,
        setElapsed,
        duration,
        setDuration
      }}
    >
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
          {TRACKS.map(({ title, url }, i) => (
            <div
              className="track-wrapper"
              onClick={() => {
                setStatus(PLAYER_STATUSES.PLAYING);
                setTitle(title);
                setTrackUrl(url);
              }}
              key={`track-wrapper-${i}`}
            >
              <h3 className="track-title">{title}</h3>
              <Waveform trackUrl={url} />
            </div>
          ))}
        </section>

        <div>
          {/* TODO: move to component */}
          {status === PLAYER_STATUSES.PAUSED && (
            <button onClick={() => setStatus(PLAYER_STATUSES.PLAYING)}>Play</button>
          )}
          {status === PLAYER_STATUSES.PLAYING && (
            <button onClick={() => setStatus(PLAYER_STATUSES.PAUSED)}>Pause</button>
          )}
          {status === PLAYER_STATUSES.PLAYING || status === PLAYER_STATUSES.PAUSED ? (
            <button onClick={() => setStatus(PLAYER_STATUSES.STOPPED)}>Stop</button>
          ) : null}
        </div>

        <Audio trackUrl={trackUrl} status={status} />

        <style jsx>{`
          :global(body) {
            background: #282831;
            color: white;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
              sans-serif;
          }
          header > h1 {
            text-align: center;
            font-size: 48px;
          }
          .track-wrapper {
            margin: 0 16px 32px;
            overflow: hidden;
          }
          .track-title {
            display: inline-block;
            cursor: pointer;
            font-weight: normal;
            text-align: left;
            margin: 1rem 0;
          }
        `}</style>
      </div>
    </PlayerContext.Provider>
  );
};

export default App;
