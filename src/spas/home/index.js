import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import GithubKitty from './assets/github.svg';
import './assets/home.font';

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
          <GithubKitty />
          <GithubKitty />
          <GithubKitty />
        </div>
        <div className="toolbar">{this.setWinningScore()}</div>
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));
