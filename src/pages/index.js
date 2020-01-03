import React, { useState } from 'react';
import Head from 'next/head';
import Audio from '../components/audio';
import Nav, { NAV_HEIGHT } from '../components/nav';
import Waveform from '../components/waveform';
import CurrentlyPlaying, { CURRENTLY_PLAYING_HEIGHT } from '../components/currentlyPlaying';
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

  const memoizedNav = React.useMemo(() => <Nav />, []);

  // console.log('render', status, trackUrl, elapsed, duration, seekingTo);

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
        changeTrack
      }}
    >
      <div>
        <Head>
          <title>🌶️ 🐅</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        {memoizedNav}

        <header>
          <h1>🌶️ 🐅</h1>
        </header>

        <section>
          {TRACKS.map(({ artist, title, url }, i) => (
            <div className="track-wrapper" key={`track-wrapper-${i}`}>
              <h3 className="track-title" onClick={() => changeTrack(url)}>
                {artist} - {title}
              </h3>
              <Waveform waveformTrackUrl={url} />
            </div>
          ))}
        </section>

        <CurrentlyPlaying />

        <Audio />

        <style jsx>{`
          :global(body) {
            background: #282831;
            color: white;
            margin: ${NAV_HEIGHT + 16}px 0 ${CURRENTLY_PLAYING_HEIGHT + 16}px;
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
