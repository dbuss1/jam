import React, { useState } from 'react';
import Head from 'next/head';
import PlayerContext from '../playerContext';
import { PLAYER_STATUSES, INITIAL_TRACKS } from '../constants';
import Audio from '../components/audio';
import Nav, { NAV_HEIGHT } from '../components/nav';
import CurrentlyPlaying, { CURRENTLY_PLAYING_HEIGHT } from '../components/currentlyPlaying';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  const [tracks, setTracks] = useState(INITIAL_TRACKS);
  const [status, setStatus] = useState();
  const [curTrack, setCurTrack] = useState({});
  const [previousTrackId, setPreviousTrackId] = useState();
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState();
  const [seekingTo, setSeekingTo] = useState();

  const changeTrack = newTrack => {
    if (newTrack.id !== curTrack.id) {
      setPreviousTrackId(curTrack.id);
      setElapsed(0);
      setCurTrack(newTrack);
      setStatus(PLAYER_STATUSES.PLAYING);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        tracks,
        setTracks,
        curTrack,
        setCurTrack,
        status,
        setStatus,
        previousTrackId,
        elapsed,
        setElapsed,
        duration,
        setDuration,
        seekingTo,
        setSeekingTo,
        changeTrack
      }}
    >
      <Head>
        <title>🌶️ 🐅</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <Component {...pageProps} />
      <CurrentlyPlaying />
      <Audio />
      <style jsx>{`
        :global(body) {
          background: #282831;
          color: white;
          margin: ${NAV_HEIGHT + 16}px 0 ${CURRENTLY_PLAYING_HEIGHT + 16}px;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
      `}</style>
    </PlayerContext.Provider>
  );
}

export default App;
