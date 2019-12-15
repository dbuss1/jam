import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import { mean } from 'd3-array';

const DEFAULT_COLOR = 'white';
const DEFAULT_HEIGHT = 120;
const MAX_NUM_LINES = 1000;

const Waveform = ({ trackUrl, color = DEFAULT_COLOR, height = DEFAULT_HEIGHT }) => {
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState();
  const [audioData, setAudioData] = useState();

  // Fetch track and set audio data on state
  useEffect(() => {
    const getAudioDataFromTrack = async () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const response = await fetch(trackUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const rawData = audioBuffer.getChannelData(0);
      // rawData is massive. Instead of storing it all in state, reduce it to
      // the max supported granularity so re-draws perform much faster.
      const reducedRawData = filterAudioData(rawData, MAX_NUM_LINES);
      setAudioData(reducedRawData);
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
      }
    }
  }, [canvasRef]);

  // Draw waveform
  useEffect(() => {
    if (audioData && canvasRef && canvasWidth) {
      const filteredData = normalizeData(
        filterAudioData(audioData, getNumLines(canvasWidth))
      );
      draw(canvasRef.current, filteredData, color);
    }
  }, [audioData, canvasRef, canvasWidth]);

  return (
    <div className="waveform-container">
      <canvas ref={canvasRef} />
      <style jsx>{`
        .waveform-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        canvas {
          width: 100%;
          height: ${height}px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

Waveform.propTypes = {
  trackUrl: PropTypes.string.isRequired,
  color: PropTypes.string,
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
  return Math.min(MAX_NUM_LINES, canvasWidth / 5); // one line every 5px
}

function normalizeData(data) {
  const multiplier = Math.pow(Math.max(...data), -1);
  return data.map(n => n * multiplier);
}

function draw(canvas, normalizedData, color) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2);

  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    const height = normalizedData[i] * canvas.offsetHeight;
    drawLine(ctx, x, height, color);
  }
}

function drawLine(ctx, x, height, color) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, -(height / 2));
  ctx.lineTo(x, height / 2);
  ctx.stroke();
}
