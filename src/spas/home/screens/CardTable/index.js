import React, { Component } from 'react';
import { shuffleArray, messaging } from '../../util';
import ScoreCard from '../../components/ScoreCard';
import Button from '../../components/Button';
import Cards from '../../components/Cards/Cards';
import Alert from '../../components/Alert';

class CardTable extends Component {
  constructor() {
    super();

    this.state = {
      deck: ['one', 'two', 'three'],
      winningScore: 10,
      isRevealed: -1,
      isShuffling: false,
      score: {
        Player: 0,
        House: 0
      },
      alert: {}
    };

    this.handleStartRound = this.handleStartRound.bind(this);
    this.setReveal = this.setReveal.bind(this);
  }

  handleScore(playerWins) {
    const alertType = playerWins ? 'success' : 'fail';

    this.setState(
      prevState => ({
        score: {
          Player: playerWins
            ? prevState.score.Player + 1
            : prevState.score.Player,
          House: !playerWins ? prevState.score.House + 1 : prevState.score.House
        },
        alert: {
          msg:
            messaging[alertType][
              Math.floor(Math.random() * messaging[alertType].length)
            ],
          type: alertType
        }
      }),
      () => {
        if (this.state.score.Player === this.state.winningScore) {
          this.setState({
            alert: {
              msg:
                'All right, you got me. Now take your money before the cops show up.',
              type: 'success'
            }
          });
        }
      }
    );
  }

  handleShuffle() {
    this.setState(prevState => {
      const newOrder = shuffleArray(prevState.deck);

      return {
        deck: newOrder
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

  setReveal(idx) {
    if (this.state.isShuffling) {
      this.handleScore(idx === 0);
    }

    this.setState(prevState => ({
      isRevealed: prevState.isRevealed === idx ? -1 : idx,
      isShuffling: false
    }));
  }

  handleStartRound() {
    this.setState(
      {
        isRevealed: 0,
        isShuffling: true,
        alert: {}
      },
      () => {
        setTimeout(() => {
          this.setShuffle();
        }, 1000); // Reveal Delay

        setTimeout(() => {
          clearInterval(this.shuffler);
        }, 3000); // Shuffle Duration
      }
    );
  }

  render() {
    const {
      deck,
      isShuffling,
      isRevealed,
      score,
      alert,
      winningScore
    } = this.state;

    return (
      <div className="container">
        <div className="statusbar">
          <Alert alert={alert} />
        </div>
        <div className="content">
          <div className="card-container">
            <Cards
              deck={deck}
              revealed={isRevealed}
              reveal={idx => this.setReveal(idx)}
            />
          </div>
        </div>
        <div className="toolbar">
          <ScoreCard score={score} toWin={winningScore}>
            <Button
              classes={['btn', 'shuffle-btn']}
              label="Shuffle"
              click={this.handleStartRound}
              disabled={isShuffling}
            />
          </ScoreCard>
        </div>
      </div>
    );
  }
}

export default CardTable;
