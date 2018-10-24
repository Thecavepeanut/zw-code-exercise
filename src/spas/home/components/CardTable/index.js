import React, { Component } from 'react';
import { shuffleArray } from '../../util';
import Card from './Card';
import Monte from './Monte';

class CardTable extends Component {
  constructor() {
    super();

    // this.shuffler = setInterval(() => {
    //   this.handleShuffle();
    // }, 500);

    this.state = {
      cards: ['one', 'two', 'three']
    };
  }

  handleShuffle() {
    this.setState(prevState => {
      const newOrder = shuffleArray(prevState.cards);

      return {
        cards: newOrder
      };
    });
  }

  handleStartRound() {
    setTimeout(() => {
      clearInterval(this.shuffler);
    }, 3000);
  }

  render() {
    return (
      <div className="card-container">
        <Card id={this.state.cards[0]}>
          <Monte />
        </Card>
        <Card id={this.state.cards[1]} /> <Card id={this.state.cards[2]} />{' '}
      </div>
    );
  }
}

export default CardTable;
