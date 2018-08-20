import React from 'react';

const DisplayBeerScore = (props) => {
  const {score = 0} = props;
  const label = 'Score: ';
  const displayScoreList = [];
  for (let i = 0; i < score; i += 1) {
    const beerIcon = <span key={i.toString()} className="icon icon-beer"/>;
    displayScoreList.push(beerIcon);
  }

  return (
    <div className="display-beer-score">
      <h2>
        {label}
        {displayScoreList}
      </h2>
    </div>
  );
}

export default DisplayBeerScore;
