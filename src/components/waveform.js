import React, { useEffect, useState, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import { mean } from 'd3-array';
import Loading from './loading';
import PlayerContext from '../playerContext';

const DEFAULT_COLORS = {
  unplayed: 'white',
  played: 'orange'
};
const DEFAULT_HEIGHT = 120;
const MAX_NUM_LINES = 1000;

const Waveform = ({ waveformTrackUrl, colors = DEFAULT_COLORS, height = DEFAULT_HEIGHT }) => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState();
  const [audioData, setAudioData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { trackUrl: playerTrackUrl, elapsed, duration } = useContext(PlayerContext);

  // Fetch track and set audio data on state
  useEffect(() => {
    const getAudioDataFromTrack = async () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const response = await fetch(waveformTrackUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const rawData = audioBuffer.getChannelData(0);
      // rawData is massive. Instead of storing it all in state, reduce it to
      // the max supported granularity so re-draws perform much faster.
      const reducedRawData = filterAudioData(rawData, MAX_NUM_LINES);
      setAudioData(reducedRawData);
      setIsLoading(false);
    };
    getAudioDataFromTrack();
  }, []);

  // Set canvas width and resize listener
  useEffect(() => {
    if (canvasRef) {
      setCanvasWidth(canvasRef.current.offsetWidth);
      const handleResize = () => {
        setCanvasWidth(canvasRef.current.offsetWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [canvasRef]);

  // Set filtered data based on number of lines we can draw
  useEffect(() => {
    if (audioData.length > 0 && canvasWidth) {
      setFilteredData(normalizeData(filterAudioData(audioData, getNumLines(canvasWidth))));
    }
  }, [audioData, canvasWidth]);

  // Draw/redraw waveform
  useEffect(() => {
    const isPlaying = playerTrackUrl === waveformTrackUrl;

    // Don't redraw waveforms that aren't playing.
    if (isRendered && !isPlaying) return;

    if (canvasRef && filteredData.length > 0) {
      setIsRendered(true);
      draw({
        isPlaying,
        canvas: canvasRef.current,
        normalizedData: filteredData,
        percentPlayed: elapsed / duration,
        colors
      });
    }
  }, [canvasRef, filteredData, elapsed, duration]);

  return (
    <div className="waveform-container">
      {isLoading && <Loading />}
      <canvas ref={canvasRef} />
      <style jsx>{`
        .waveform-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${height}px;
          padding: 4px 8px;
          background-image: linear-gradient(transparent, rgba(255, 255, 255, 0.1), transparent);
          border-radius: 4px;
          cursor: pointer;
        }
        canvas {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          position: ${isLoading ? 'absolute' : 'relative'};
        }
      `}</style>
    </div>
  );
};

Waveform.propTypes = {
  waveformTrackUrl: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    unplayed: PropTypes.string,
    played: PropTypes.string
  }),
  height: PropTypes.number
};

export default Waveform;

// Chunks audio data based on number of waveform lines
// and maps that into the mean of each chunk.
function filterAudioData(audioData, numLines) {
  const dataPointsPerLine = Math.floor(audioData.length / numLines);
  return chunk(
    audioData.map(d => Math.abs(d)),
    dataPointsPerLine
  ).map(c => mean(c));
}

// Determine number of lines to render based on canvas width
function getNumLines(canvasWidth) {
  return Math.min(MAX_NUM_LINES, canvasWidth / 4); // one line every 4px
}

function normalizeData(data) {
  const multiplier = Math.pow(Math.max(...data), -1);
  return data.map(n => n * multiplier);
}

function draw({ isPlaying, canvas, normalizedData, percentPlayed, colors }) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2);
  ctx.lineWidth = 2;

  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    const height = normalizedData[i] * canvas.offsetHeight;
    ctx.strokeStyle =
      isPlaying && percentPlayed && percentPlayed > i / normalizedData.length
        ? colors.played
        : colors.unplayed;
    ctx.beginPath();
    ctx.moveTo(x, -(height / 2));
    ctx.lineTo(x, height / 2);
    ctx.stroke();
  }
}
