import React, { Component } from 'react';
import * as util from '../../util';
import ScoreCard from '../../components/ScoreCard';
import Button from '../../components/Button';
import Cards from '../../components/Cards';
import Alert from '../../components/Alert';
import Modal from '../../components/Modal';

class CardTable extends Component {
  constructor() {
    super();

    this.state = util.defaultGameState;
    this.handleStartRound = this.handleStartRound.bind(this);
    this.setReveal = this.setReveal.bind(this);
    this.setBool = this.setBool.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleScore(playerWins) {
    const alertType = playerWins ? 'success' : 'fail';

    this.setState(
      prevState => {
        const prevScore = prevState.score;

        return {
          score: {
            Player: playerWins ? prevScore.Player + 1 : prevScore.Player,
            House: !playerWins ? prevScore.House + 1 : prevScore.House
          },
          alert: {
            msg:
              util.messaging[alertType][
                Math.floor(Math.random() * util.messaging[alertType].length)
              ],
            type: alertType
          }
        };
      },
      () => {
        if (this.state.score.Player === this.state.winningScore) {
          this.setState({
            alert: {
              msg:
                'All right, you got me. Now take your money before the cops show up.',
              type: 'success'
            },
            reset: true
          });
        }
      }
    );
  }

  handleShuffle() {
    this.setState(prevState => {
      const newOrder = util.shuffleArray(prevState.deck);

      return {
        deck: newOrder
      };
    });
  }

  setShuffle() {
    this.setState({
      isRevealed: -1,
      disableReveal: true
    });
    this.shuffler = setInterval(() => {
      this.handleShuffle();
    }, 500); // Animation Speed
  }

  setReveal(idx) {
    if (this.state.disableReveal) {
      return null;
    }

    if (this.state.isShuffling) {
      this.handleScore(idx === 0);
    }

    this.setState(prevState => ({
      isRevealed: prevState.isRevealed === idx ? -1 : idx,
      isShuffling: false
    }));
  }

  setBool(boolKey) {
    this.setState(prevState => ({
      [boolKey]: !prevState[boolKey]
    }));
  }

  setDifficulty(level) {
    this.setState({
      difficulty: level * 3000,
      difficultyModal: false
    });
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
          clearInterval(this.shuffler);
          this.setState({
            disableReveal: false
          });
        }, this.state.difficulty); // Shuffle Duration
      }
    );
  }

  handleReset() {
    this.setState(util.defaultGameState);
  }

  render() {
    const {
      deck,
      isShuffling,
      isRevealed,
      score,
      alert,
      winningScore,
      reset,
      difficultyModal,
      difficulty
    } = this.state;

    return (
      <div className="container">
        <Alert alert={alert} hide={isShuffling} />
        <Button
          classes={['btn', 'difficulty-btn']}
          label="Difficulty"
          click={() => this.setBool('difficultyModal')}
          disabled={isShuffling}
        />
        {difficultyModal && (
          <Modal>
            {['Easy', 'Medium', 'Hard'].map((level, i) => (
              <Button
                key={level}
                classes={['btn', difficulty / 3000 === i + 1 ? 'selected' : '']}
                label={level}
                click={() => this.setDifficulty(i + 1)}
              />
            ))}
          </Modal>
        )}

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
        {reset && (
          <Modal>
            <Button
              classes={['btn', 'reset-btn']}
              label="Start Over"
              click={this.handleReset}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default CardTable;
