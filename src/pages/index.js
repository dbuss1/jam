import React, { useContext } from 'react';
import Waveform from '../components/waveform';
import DropTrack from '../components/dropTrack';
import PlayerContext from '../playerContext';

const Home = () => {
  const { tracks, changeTrack } = useContext(PlayerContext);

  return (
    <div>
      <header>
        <h1>🌶️ 🐅</h1>
      </header>

      <section>
        <DropTrack />
        {tracks.map(track => (
          <div className={`track-wrapper-${track.id}`} key={`track-wrapper-${track.id}`}>
            <h3 className="track-title" onClick={() => changeTrack(track)}>
              <span className="artist">{track.artist}</span>
              <span className="title">{track.title}</span>
            </h3>
            <Waveform track={track} />
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

export default Home;
