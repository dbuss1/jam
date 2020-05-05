import React, { useState, useContext } from 'react';
import { get } from 'lodash';
import * as mm from 'music-metadata-browser';
import PlayerContext from '../playerContext';
import { newTrackId } from '../helpers';

const DropTrack = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { changeTrack, tracks, setTracks } = useContext(PlayerContext);

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);

    for (const file of e.dataTransfer.files) {
      if (/audio/.test(file.type)) {
        readFile(file);
      }
    }
  };

  const readFile = file => {
    const reader = new FileReader();
    reader.onload = async () => {
      const url = reader.result;
      const metadata = await mm.fetchFromUrl(url);
      console.log('metadata', metadata);
      const newTrack = {
        title: get(metadata, 'common.title'),
        artist: get(metadata, 'common.artist'),
        album: get(metadata, 'common.album'),
        year: get(metadata, 'common.year'),
        art: get(metadata, 'common.picture.0'),
        url,
        id: newTrackId()
      };
      setTracks([newTrack, ...tracks]);
      changeTrack(newTrack);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`drop-track ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      Drag your own audio file here
      <style jsx>{`
        .drop-track {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          margin: 1rem;
          border: 2px dashed grey;
          border-radius: 4px;
        }
        .drop-track.dragging {
          border-color: orange;
        }
      `}</style>
    </div>
  );
};

export default DropTrack;
