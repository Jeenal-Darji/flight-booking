import React from 'react';

const CurvedArrow = () => {
  return (
    <svg width="100" height="100">
      <path
        d="M 20,50 Q 50,10 80,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="black" />
        </marker>
      </defs>
    </svg>
  );
};

export default CurvedArrow;
