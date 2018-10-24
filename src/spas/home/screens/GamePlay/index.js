import React, { Component } from 'react';
import CardTable from '../../components/CardTable';
import ScoreCard from '../../components/ScoreCard';

class GamePlay extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      isShuffling: false,
      alert: {},
      gameStatus: 'new'
    };
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <CardTable />
        </div>
        <div className="toolbar">
          <ScoreCard />
        </div>
      </div>
    );
  }
}

export default GamePlay;
