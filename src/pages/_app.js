import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import PlayerContext from '../playerContext';
import { PLAYER_STATUSES } from '../constants';
import Audio from '../components/audio';
import Nav, { NAV_HEIGHT } from '../components/nav';
import CurrentlyPlaying, { CURRENTLY_PLAYING_HEIGHT } from '../components/currentlyPlaying';

function MyApp({ Component, pageProps }) {
  const [status, setStatus] = useState();
  const [trackUrl, setTrackUrl] = useState();
  const [previousTrackUrl, setPreviousTrackUrl] = useState();
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState();
  const [seekingTo, setSeekingTo] = useState();

  const changeTrack = newTrackUrl => {
    if (newTrackUrl !== trackUrl) {
      setPreviousTrackUrl(trackUrl);
      setElapsed(0);
      setTrackUrl(newTrackUrl);
      setStatus(PLAYER_STATUSES.PLAYING);
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

MyApp.propTypes = {
  Component: PropTypes.function,
  pageProps: PropTypes.object
};

export default MyApp;
