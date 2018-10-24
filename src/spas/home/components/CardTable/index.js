import React, { Component } from 'react';
import { shuffleArray } from '../../util';
import Card from './Card';
import Monte from './Monte';

class CardTable extends Component {
  constructor() {
    super();

    this.state = {
      cards: ['one', 'two', 'three'],
      isRevealed: -1,
      isShuffling: false
    };

    this.handleStartRound = this.handleStartRound.bind(this);
    this.setReveal = this.setReveal.bind(this);
  }

  handleShuffle() {
    this.setState(prevState => {
      const newOrder = shuffleArray(prevState.cards);

      return {
        cards: newOrder
      };
    });
  }

  setShuffle() {
    this.setState({
      isRevealed: -1
    });
    this.shuffler = setInterval(() => {
      this.handleShuffle();
    }, 500); // Animation Speed
  }

  setReveal(index) {
    if (index === 0) {
      // correct
    } else {
      // wrong
    }

    this.setState({
      isRevealed: index,
      isShuffling: false
    });
  }

  handleEndRound() {
    clearInterval(this.shuffler);

    // this.setState({
    //   isShuffling: false
    // });
  }

  handleStartRound() {
    this.setState(
      {
        isRevealed: 0,
        isShuffling: true
      },
      () => {
        setTimeout(() => {
          this.setShuffle();
        }, 1000); // Reveal Delay

        setTimeout(() => {
          this.handleEndRound();
        }, 3000); // Shuffle Duration
      }
    );
  }

  render() {
    const { cards, isShuffling, isRevealed } = this.state;

    return (
      <div className="card-container">
        <button
          type="button"
          className={`btn ${isShuffling ? 'offscreen' : ''}`}
          onClick={this.handleStartRound}
        >
          Shuffle
        </button>

        {cards.map((card, i) => {
          return (
            <Card
              key={`card-${i}`}
              id={cards[i]}
              isRevealed={isRevealed === i}
              revealMe={() => this.setReveal(i)}
            >
              {i === 0 && <Monte />}
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CardTable;
