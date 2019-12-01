import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { chunk } from 'lodash';
import { mean } from 'd3-array';
import { scaleLinear } from 'd3-scale';

const COLORS = {
  played: '#ff9000',
  unplayed: '#aaa',
};

function getColor(
  numBars,
  barIndex,
  percentPlayed
) {
  return (barIndex / numBars < percentPlayed / 100) ? COLORS.played : COLORS.unplayed;
}

const Waveform = ({ waveformUrl, height = 100, width = 1080 }) => {
  const [waveformData, setWaveformData] = useState({});
  const [percentPlayed, setPercentPlayed] = useState(50);

  useEffect(() => {
    async function fetchWaveformData() {
      const resp = await fetch(waveformUrl);
      const json = await resp.json();
      setWaveformData(json);
    }
    fetchWaveformData();
  }, [waveformUrl]);

  if (!waveformData.samples || waveformData.samples.length === 0) {
    return null;
  }

  const scaleLinearHeight = scaleLinear()
    .domain([0, waveformData.height])
    .range([0, height]);

  const numChunks = width / 3; // 3px per chunk (2px width + 1px marginRight)
  const chunks = chunk(
    waveformData.samples,
    waveformData.width / numChunks
  );

  // TODO: use canvas instead?

  return (
    <div className="waveform-container">
      <div className="waveform">
        {chunks.map((chunk, i) => (
          <span
            key={`waveform-chunk-${i}`}
            onClick={() => {
            // TODO
            }}
          >
            <span
              style={{
                backgroundColor: getColor(
                  chunks.length,
                  i,
                  percentPlayed,
                ),
                display: 'inline-block',
                width: 2,
                marginRight: 1,
                height: scaleLinearHeight(mean(chunk))
              }}
            />
          </span>
        ))}
      </div>
      <style jsx>{`
        .waveform-container, .waveform {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

Waveform.propTypes = {
  waveformUrl: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

export default Waveform;
