import React, {Component} from 'react';
import DisplayBeerScore from './DisplayBeerScore';
import DisplayPlayerName from './DisplayPlayerName';
import DisplayWinnerPanel from './DisplayWinnerPanel';
import DisplayStartScreen from './DisplayStartScreen';
import DisplayGamePanel from './DisplayGamePanel';

class ClickGame extends Component {
  constructor(props) {
    super(props);
    this.state = {playerName:'',
                  isStartGame: false,
                  isWinner: false,
                  score: 0};
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    this.handleAddScore = this.handleAddScore.bind(this);
  }

  handleStartGame(config) {
    const {playerName, isStartGame} = config;
    this.setState({playerName, isStartGame});
  }

  handleResetGame() {
    this.setState({isWinner: false, score: 0});
  }

  handleAddScore() {
    const {winScore = 10} = this.props;
    let {score} = this.state;
    score += 1;
    if (score >= winScore) {
      const isWinner = true;
      this.setState({isWinner, score});
    } else {
      this.setState({score});
    }
  }

  render() {
    const {
      playerName,
      isStartGame,
      isWinner,
      score } = this.state;

    let gamePanel = <DisplayGamePanel
                        onAddScore={this.handleAddScore} />

    if (isWinner) {
      gamePanel = <DisplayWinnerPanel
                      onResetGame={this.handleResetGame} />;
    }

    if (isStartGame) {
      return (
        <div className="click-game">
          <DisplayPlayerName name={playerName}/>
          <DisplayBeerScore score={score}/>
          {gamePanel}
        </div>
      )
    }
    return (
      <DisplayStartScreen
        onStartGame={this.handleStartGame} />
    )
  }
}

export default ClickGame;
