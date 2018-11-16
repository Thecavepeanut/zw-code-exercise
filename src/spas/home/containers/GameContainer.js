import React from 'react'
import constants from '../helpers/constants'

import Scorecard from '../components/Scorecard'
import MovingTarget from '../components/MovingTarget'
import StartScreen from '../components/StartScreen'
import SuccessScreen from '../components/GamePrompt'

class GameContainer extends React.Component{

  state = {
    playerScore: 0,
    isPlaying: false
  }

  handlePlayerScores = () => {
    this.setState({
      playerScore: playerScore + 1
    })
  }

  handleStartGame = () => {
    this.setState({
      playerScore: 0,
      isPlaying: true
    })
  }

  renderStartScreen = () => {
    return !this.state.isPlaying && !this.state.isPlaying && 
      <StartScreen onClick={this.handleStartGame}/>
  }

  renderSuccessCreen = () => {
    return this.state.playerScore >= constants.winningScore && 
      <SuccessScreen />
  }

  render(){
    return (
      <div className="game-container">
        {this.renderStartScreen()}
        {this.renderSuccessCreen()}
        <Scorecard />
        <MovingTarget />
      </div>
    )
  }
}

export default GameContainer