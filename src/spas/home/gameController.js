import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import ScoreBoard from "./scoreBoard.js";
import GameTarget from "./gameTarget.js";

/**
 *  for controlling the logics of the game
 */
class GameController extends Component {


  constructor(props) {

    super(props);
    this.hitHandler = this.hitHandler.bind(this);

    this.state = {
      score: 0,
      playing: true
    };
  }

  /**
   * handler when githubKitty is hit
   */
  hitHandler() {
    let playing = this.state.score >= 9 ? false : true;
    let score = playing ? this.state.score + 1 : this.state.score; 

    this.setState({
      "playing": playing,
      score: score,
      showWinner: !playing
    });
  }

  render() {
    return (
      <div className="gameArea">
        <ScoreBoard showWinner={this.state.showWinner} score={this.state.score} />
        <GameTarget playing={this.state.playing} hitHandler={this.hitHandler} />
      </div>
    )

  }

}


export default GameController;