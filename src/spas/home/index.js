import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Monte from './components/Monte';
import './styles.scss';
import './assets/home.font';

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class HomeSPA extends Component {
  constructor() {
    super();

    this.shuffler = setInterval(() => {
      this.handleShuffle();
    }, 500);

    this.state = {
      score: 0,
      winningScore: 10,
      cards: ['one', 'two', 'three']
    };
  }

  componentDidMount() {
    setTimeout(() => {
      clearInterval(this.shuffler);
    }, 3000);
  }

  setWinningScore() {
    let tally = [];
    for (let i = 0; i < this.state.winningScore; i++) {
      tally.push(<span key={`tally-${i}`} className="icon icon-beer" />);
    }

    return tally;
  }

  handleShuffle() {
    this.setState(prevState => {
      const newOrder = shuffleArray(prevState.cards);

      return {
        cards: newOrder
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="card-container">
            <Card id={this.state.cards[0]}>
              <Monte />
            </Card>
            <Card id={this.state.cards[1]} />
            <Card id={this.state.cards[2]} />
          </div>
        </div>
        <div className="toolbar">{this.setWinningScore()}</div>
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));
