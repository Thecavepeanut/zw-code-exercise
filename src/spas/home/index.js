import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "./home.font";
import Target from "./components/Target";
import PlayButton from "./components/PlayButton";
import Scoreboard from "./components/Scoreboard";
import Message from "./components/Message";

class HomeSPA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      targetLeftPosition: 0,
      targetTopPosition: 0,
      score: 0,
      maxScore: 10,
      isPlaying: false,
      gamesPlayed: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
    this.startGame = this.startGame.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleDroneHit = this.handleDroneHit.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateTargetPosition();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  updateTargetPosition() {
    this.setState({
      targetLeftPosition: this.getRandomPosition(0, window.innerWidth),
      targetTopPosition: this.getRandomPosition(0, window.innerHeight)
    });
  }

  getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  handleTransitionEnd() {
    if (this.state.isPlaying) {
      this.updateTargetPosition();
    }
  }

  handleDroneHit(event) {
    const { score, maxScore } = this.state;

    if (score < maxScore) {
      this.setState(
        currentState => ({
          score: currentState.score + 1
        }),
        () => {
          this.checkForWin(this.state.score);
        }
      );
    }
  }

  checkForWin(score) {
    const { maxScore } = this.state;

    if (score >= maxScore) {
      this.setState(currentState => ({
        isPlaying: false,
        gamesPlayed: currentState.gamesPlayed + 1,
        targetLeftPosition: currentState.targetLeftPosition,
        targetTopPosition: currentState.windowHeight + 100
      }));
    }
  }

  startGame() {
    this.setState({
      isPlaying: true,
      score: 0
    });
    this.updateTargetPosition();
  }

  render() {
    const {
      targetLeftPosition,
      targetTopPosition,
      score,
      isPlaying,
      gamesPlayed
    } = this.state;

    const targetStyle = {
      transform: `translate3d(${targetLeftPosition}px, ${targetTopPosition}px, 0px)`
    };

    return (
      <div className={`game ${isPlaying && "is-playing"}`}>
        <Message isPlaying={isPlaying} gamesPlayed={gamesPlayed} />
        <PlayButton
          isPlaying={isPlaying}
          handleClick={this.startGame}
          gamesPlayed={gamesPlayed}
        />
        <Scoreboard isPlaying={isPlaying} score={score} />
        <Target
          styles={targetStyle}
          handleDroneHit={this.handleDroneHit}
          handleTransitionEnd={this.handleTransitionEnd}
        />
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById("react-spa"));
