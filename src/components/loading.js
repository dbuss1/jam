import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ size = 30 }) => {
  return (
    <React.Fragment>
      <div />
      <style jsx>{`
        div {
          display: inline-block;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border: ${size / 6}px solid white;
          border-top: ${size / 6}px solid orange;
          border-radius: 50%;
          width: ${size}px;
          height: ${size}px;
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Loading.propTypes = {
  size: PropTypes.number
};

export default Loading;
