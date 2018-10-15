import React from 'react';

const Score = ({ score, colors }) => {
  let icons = [];
  if (score) {
    for (let i = 0; i < score; i++) {
      icons.push(<span
        className="icon icon-beer"
        key={i}
        style={{ color: `${colors}`, fontSize: '30px' }} />)
    }
    return <div className="score-container">{icons}</div>;
  } else {
    return (
      <div>
        <h3 style={{fontSize: '30px', marginBlockEnd: '0', marginBlockStart: '0'}}>Click the Head</h3>
      </div>
    )
  }
}

export default Score;