import React from 'react';
import PropTypes from 'prop-types';
import { timeString } from '../formatters';

const TimeString = ({ elapsed, duration }) => (
  <React.Fragment>
    <div>
      <span>{timeString(elapsed)}</span>
      <span>{timeString(duration)}</span>
    </div>
    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        position: relative;
        top: -2rem;
      }
      div > span {
        background: black;
        padding: 2px;
        font-size: 12px;
      }
    `}</style>
  </React.Fragment>
);

TimeString.propTypes = {
  elapsed: PropTypes.number,
  duration: PropTypes.number
};

export default TimeString;
