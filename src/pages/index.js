import React, { useState } from 'react';
import Head from 'next/head';
import Audio from '../components/audio';
import Nav from '../components/nav';
import Waveform from '../components/waveform';
import { PLAYER_STATUSES, TRACKS } from '../constants';
import PlayerContext from '../playerContext';

const App = () => {
  const [status, setStatus] = useState(PLAYER_STATUSES.STOPPED);
  const [trackUrl, setTrackUrl] = useState();
  const [previousTrackUrl, setPreviousTrackUrl] = useState();
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState();
  const [seekingTo, setSeekingTo] = useState();

  const stopTrack = () => {
    setTrackUrl();
    setStatus(PLAYER_STATUSES.STOPPED);
    setDuration();
    setElapsed(0);
  };

  const changeTrack = newTrackUrl => {
    setPreviousTrackUrl(trackUrl);
    if (newTrackUrl) {
      setElapsed(0);
      setTrackUrl(newTrackUrl);
      setStatus(PLAYER_STATUSES.PLAYING);
    } else {
      stopTrack();
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        status,
        setStatus,
        trackUrl,
        setTrackUrl,
        previousTrackUrl,
        elapsed,
        setElapsed,
        duration,
        setDuration,
        seekingTo,
        setSeekingTo,
        changeTrack,
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
            <div className="track-wrapper" key={`track-wrapper-${i}`}>
              <h3 className="track-title" onClick={() => changeTrack(url)}>
                {title}
              </h3>
              <Waveform waveformTrackUrl={url} />
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

        <Audio />

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
            margin-bottom: 32px;
            overflow: hidden;
          }
          .track-title {
            display: inline-block;
            cursor: pointer;
            font-weight: normal;
            text-align: left;
            margin: 1rem;
          }
        `}</style>
      </div>
    </PlayerContext.Provider>
  );
};

export default App;
