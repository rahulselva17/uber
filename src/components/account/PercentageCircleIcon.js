import React from 'react';
import './PercentageCircleIcon.css';

function PercentageCircleIcon({ percentage = 75 }) {
  const size = 90;
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circle-container" style={{ width: size, height: size }}>
      <div className="circle-background" style={{ width: size, height: size }}>
      </div>
      <div className="circle-progress" style={{ width: size, height: size, strokeDashoffset }}>
      </div>
      <div className="circle-content">
        <i className="fas fa-cogs" style={{ fontSize: size / 3, color: '#4caf50' }}></i>
        <span className="percentage-text">{percentage}%</span>
      </div>
    </div>
  );
};

export default PercentageCircleIcon;
