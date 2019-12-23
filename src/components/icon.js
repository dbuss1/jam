import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from '../img/play.svg';
import PauseIcon from '../img/pause.svg';
import StopIcon from '../img/stop.svg';

const iconTypeMap = {
  play: PlayIcon,
  pause: PauseIcon,
  stop: StopIcon
};

const Icon = ({ type, size = 14, color = 'white' }) => {
  const MappedIcon = iconTypeMap[type];
  return (
    <React.Fragment>
      <MappedIcon />
      <style jsx>{`
        svg {
          height: ${size}px;
          width: ${size}px;
          fill: ${color} !important;
          stroke: ${color} !important;
        }
        svg * {
          fill: ${color} !important;
          stroke: ${color} !important;
        }
      `}</style>
    </React.Fragment>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
