import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Waveform from '../components/waveform';

const TRACKS = [
  {
    title: 'SAS',
    url: '/track1.mp3',
    waveformUrl: 'https://wave.sndcdn.com/GjqmL0Sprea3_m.json'
  }
];

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(TRACKS[0]);
  const audioRef = useRef(null);

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
        <h2>{currentTrack.title}</h2>
        <Waveform audioRef={audioRef} track={currentTrack} />
      </section>

      <audio ref={audioRef} />

      <style jsx>{`
        :global(body) {
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
      `}</style>
    </div>
  );
};

export default App;
