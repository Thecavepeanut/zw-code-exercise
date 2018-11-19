import React, { Component, Fragment } from 'react'
import GameStats from './Stats.jsx';
import GithubKitty from '../github.svg';
import WelcomeScreen from '../Container/HomeScreen.jsx';
import EndGameScreen from './EndGame.jsx';
import PlayerTarget from '../Container/PlayerTarget.jsx';
import gameConfig from '../data/config.json';
import '../styles.scss';
import '../home.font';


 class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timeEnded: false,
            firstGameScreen: true,
            gameInProgress: false,
            gameEnded: false,
            gameWon: false,
        }
        this.gameWon = this.gameWon.bind(this);
        this.hideFirstGameScreen = this.hideFirstGameScreen.bind(this);
        this.timeEnded = this.timeEnded.bind(this);
        this.targetClicked = this.targetClicked.bind(this);
        this.gameEnded = this.gameEnded.bind(this);
        this.startNewGame = this.startNewGame.bind(this);
    }


    timeEnded() {
       this.setState({timeEnded: true}, () => {
         this.gameEnded();
       });
    }

     targetClicked() {
       this.setState({score: this.state.score + 1}, () => {
         if(this.state.score === 10) {
            this.gameWon(true);
            this.timeEnded();
         }
       });
    }

    hideFirstGameScreen() {
       this.setState({firstGameScreen: false}, () => this.startNewGame());
    }

    startNewGame() {
      this.setState({gameInProgress: true, score: 0});
    }

    gameEnded() {
      this.setState({
       gameInProgress: false,
       gameEnded: true
     }, () => {
        this.gameWon(this.state.score === 10);
     });
    }

    gameWon(result) {
      this.setState({gamewon: result})
    }


    _renderGameScreen() {
      if(this.state.firstGameScreen) {
        return <WelcomeScreen hideFirstGameScreen={this.hideFirstGameScreen}/>
      } else {
        if (this.state.gameInProgress) {
          return (
            <Fragment>
              <GameStats timeEnded={this.timeEnded} currentScore={this.state.score} />
              <PlayerTarget targetClicked={this.targetClicked} />
            </Fragment>
          )
        } else {
          if (this.state.gameEnded) {
              return <EndGameScreen gameStatus={this.state.gamewon} startNewGame={this.startNewGame} />
          }
        }
      }

    }

    render() {
        return (
            <div className="appwrapper">
              {this._renderGameScreen()}
            </div>
        );
    }
}
export default GameScreen;
