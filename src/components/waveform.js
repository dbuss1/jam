import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import { mean } from 'd3-array';

const LINE_COLOR = 'white';
const NUM_LINES = 400;
const CANVAS_HEIGHT = '120px';

const Waveform = ({ trackUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchTrackUrl = async () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const response = await fetch(trackUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      const filteredData = normalizeData(filterAudioData(audioBuffer));
      draw(canvasRef.current, filteredData);
    };
    fetchTrackUrl();
  }, [canvasRef]);

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
          height: ${CANVAS_HEIGHT};
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

Waveform.propTypes = {
  trackUrl: PropTypes.string
};

export default Waveform;

function filterAudioData(audioBuffer) {
  const rawData = audioBuffer.getChannelData(0);
  const dataPointsPerLine = Math.floor(rawData.length / NUM_LINES);
  return chunk(
    rawData.map(d => Math.abs(d)),
    dataPointsPerLine
  ).map(c => mean(c));
}

function normalizeData(data) {
  const multiplier = Math.pow(Math.max(...data), -1);
  return data.map(n => n * multiplier);
}

function draw(canvas, normalizedData) {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2);

  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    let height = normalizedData[i] * canvas.offsetHeight;
    drawLine(ctx, x, height);
  }
}

function drawLine(ctx, x, height) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = LINE_COLOR;
  ctx.beginPath();
  ctx.moveTo(x, -(height / 2));
  ctx.lineTo(x, height / 2);
  ctx.stroke();
}
