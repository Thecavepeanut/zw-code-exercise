import React, { Component } from 'react';
import '../../assets/home.font';

class ScoreCard extends Component {
  setWinningScore() {
    let tally = [];
    for (let i = 0; i < 10; i++) {
      tally.push(<span key={`tally-${i}`} className="icon icon-beer" />);
    }

    return tally;
  }

  render() {
    return <div> {this.setWinningScore()} </div>;
  }
}

export default ScoreCard;
