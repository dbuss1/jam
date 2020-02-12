import React, { useContext } from 'react';
import Waveform from '../components/waveform';
import DropTrack from '../components/dropTrack';
import PlayerContext from '../playerContext';

const Home = () => {
  const { tracks, changeTrack } = useContext(PlayerContext);

  return (
    <div>
      <header>
        <h1>happy little sound clouds</h1>
      </header>

      <section>
        <DropTrack />
        {tracks.map(track => {
          let art = null;
          if (track.art) {
            const blob = new Blob([track.art.data], { type: track.art.format });
            const imageUrl = window.URL.createObjectURL(blob);
            art = <img className="art" src={imageUrl} />;
          }
          return (
            <div className="track-wrapper" key={`track-wrapper-${track.id}`}>
              <div className="track" onClick={() => changeTrack(track)}>
                {art}
                <div className="artist-title">
                  <h3 className="artist">{track.artist}</h3>
                  <h3 className="title">{track.title}</h3>
                </div>
              </div>
              <Waveform track={track} />
            </div>
          );
        })}
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
        .track {
          display: inline-flex;
          cursor: pointer;
          margin: 1rem 1rem 0;
        }
        .track .art {
          height: 80px;
          width: 80px;
          margin-right: 1rem;
        }
        .track h3 {
          margin: 0;
          font-weight: normal;
        }
        .track .artist-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .track .artist {
          font-size: 90%;
          color: #ccc;
        }
      `}</style>
    </div>
  );
};

export default Home;
