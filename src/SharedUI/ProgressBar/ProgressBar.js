import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${props.percent}%` }}></div>
      <div className="progress-bar-text">
      </div>
    </div>
  );
};

export default ProgressBar;