import React, { useState, useContext } from 'react';
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
    reader.onload = e => {
      console.log(e);
      // TODO: get metadata from file?
      const newTrack = {
        title: 'new song',
        artist: '???',
        url: reader.result,
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
      Drag an audio file here
      <style jsx>{`
        .drop-track {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 300px;
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
