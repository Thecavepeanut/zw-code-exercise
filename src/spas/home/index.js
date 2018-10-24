import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './assets/home.font';
import CardTable from './components/CardTable';
import ScoreCard from './components/ScoreCard';

class HomeSPA extends Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      winningScore: 10
    };
  }

  setWinningScore() {
    let tally = [];
    for (let i = 0; i < this.state.winningScore; i++) {
      tally.push(<span key={`tally-${i}`} className="icon icon-beer" />);
    }

    return tally;
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <CardTable />
        </div>
        <div className="toolbar">
          <ScoreCard>{this.setWinningScore()}</ScoreCard>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));
