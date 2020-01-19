import React, { useContext } from 'react';
import Waveform from '../components/waveform';
import { TRACKS } from '../constants';
import PlayerContext from '../playerContext';

const App = () => {
  const { changeTrack } = useContext(PlayerContext);

  return (
    <div>
      <header>
        <h1>🌶️ 🐅</h1>
      </header>

      <section>
        {TRACKS.map(({ artist, title, url }, i) => (
          <div className="track-wrapper" key={`track-wrapper-${i}`}>
            <h3 className="track-title" onClick={() => changeTrack(url)}>
              <span className="artist">{artist}</span>
              <span className="title">{title}</span>
            </h3>
            <Waveform waveformTrackUrl={url} />
          </div>
        ))}
      </section>

      <style jsx>{`
        header > h1 {
          text-align: center;
          font-size: 48px;
        }
        .track-wrapper {
          margin-bottom: 32px;
          overflow: hidden;
        }
        .track-title {
          display: inline-flex;
          flex-direction: column;
          cursor: pointer;
          font-weight: normal;
          margin: 1rem 1rem 0;
        }
        .track-title .artist {
          font-size: 80%;
          color: #ccc;
        }
      `}</style>
    </div>
  );
};

export default App;
