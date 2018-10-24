import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Monte from './components/Monte';
import './styles.scss';
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
          <div className="card-container">
            <Card id="one">
              <Monte />
            </Card>
            <Card id="two" />
            <Card id="three" />
          </div>
        </div>
        <div className="toolbar">{this.setWinningScore()}</div>
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));
