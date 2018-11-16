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
      isPlaying: false
    }
    this.handlePlayerScores = this.handlePlayerScores.bind(this)
    this.handleStartGame = this.handleStartGame.bind(this)
  }

  handlePlayerScores(){
    console.log('handlePlayerScores')
    const playerScore = this.state.playerScore
    if(this.state.playerScore === constants.winningScore-1){
      // winning point
      this.setState({
        playerScore: playerScore + 1,
        isPlaying: false
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
      isPlaying: true
    })
  }

  renderStartScreen(){
    return !this.state.isPlaying && !this.state.isPlaying && 
      <GamePrompt onClick={this.handleStartGame}
        promptTitle='ZipWhip Click Game'
        promptText='Instructions: Click the kitty 10 times to win'
        buttonText='Start Game'/>
  }

  renderSuccessCreen(){
    return this.state.playerScore >= constants.winningScore && 
    <GamePrompt onClick={this.handleStartGame}
      promptText='YOU WIN THE JACKPOT!'
      buttonText='Play Again'/>
  }

  renderGameScreen(){
    return this.state.isPlaying && 
      <div>
        <div>Click the moving Kitty 10 times to win!</div>
        <Scorecard playerScore={this.state.playerScore}/>
        <MovingTarget onClick={this.handlePlayerScores}/>
      </div>
  }

  render(){
    return (
      <div className="game-container">
        {this.renderStartScreen()}
        {this.renderGameScreen()}
        {this.renderSuccessCreen()}
      </div>
    )
  }
}

export default GameContainer