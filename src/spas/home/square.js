import React from 'react';

const githubSVG = ({ width, height, color, posX, posY }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    style = {{position: 'absolute', left: posX, top: posY}}
  >
      <rect 
        width={width} 
        height={height} 
        style={{fill: color}} 
      />
  </svg>
)

export default githubSVG;