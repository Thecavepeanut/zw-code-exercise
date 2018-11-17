import React from 'react'
import constants from '../helpers/constants'

import Scorecard from '../components/Scorecard'
import MovingTarget from '../components/MovingTarget'
import GamePrompt from '../components/GamePrompt'

class GameContainer extends React.Component{

  constructor(){
    super()
    this.state = {
      playerScore: 0,
      isPlaying: false,
      screenType: constants.START_SCREEN
    }
    this.handlePlayerScores = this.handlePlayerScores.bind(this)
    this.handleStartGame = this.handleStartGame.bind(this)
  }

  handlePlayerScores(){
    const playerScore = this.state.playerScore
    if(this.state.playerScore === constants.WINNING_SCORE-1){
      // winning point
      this.setState({
        playerScore: playerScore + 1,
        isPlaying: false,
        screenType: constants.END_SCREEN
      })
    }else{
      this.setState({
        playerScore: playerScore + 1
      })
    }
  }

  handleStartGame(){
    this.setState({
      playerScore: 0,
      isPlaying: true,
      screenType: constants.PLAYING_SCREEN
    })
  }

  renderStartScreen(){
    return <GamePrompt onClick={this.handleStartGame}
        promptTitle='ZipWhip Click Game'
        promptText='Instructions: Click the kitty 10 times to win'
        buttonText='Start Game'/>
  }

  renderEndScreen(){
    return <GamePrompt onClick={this.handleStartGame}
      promptText='👾👾 YOU WIN! WOOP WOOP! 👾👾'
      buttonText='Play Again'/>
  }

  renderPlayingScreen(){
    return <div>
      <h1>> Hello Kitty!</h1>
      <Scorecard playerScore={this.state.playerScore}/>
      <MovingTarget onClick={this.handlePlayerScores}/>
    </div>
  }

  renderGameScreen(){
    switch(this.state.screenType){
      case constants.START_SCREEN:
        return this.renderStartScreen();
      case constants.PLAYING_SCREEN:
        return this.renderPlayingScreen();
      case constants.END_SCREEN:
        return this.renderEndScreen();
      default:
        return this.renderStartScreen();
    }
  }

  render(){
    return (
      <div className="game-container">
        {this.renderGameScreen()}
      </div>
    )
  }
}

export default GameContainer