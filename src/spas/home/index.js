import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "./home.font";
import Target from "./components/Target";
import PlayButton from "./components/PlayButton";
import Scoreboard from "./components/Scoreboard";
import Message from "./components/Message";

const MAX_SCORE = 10;

class HomeSPA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      targetLeftPosition: 0,
      targetTopPosition: 0,
      score: 0,
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
    this.setState(state => ({
      targetLeftPosition: this.getRandomPosition(0, state.windowWidth),
      targetTopPosition: this.getRandomPosition(0, state.windowHeight)
    }));
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
    const { score } = this.state;

    if (score < MAX_SCORE) {
      this.setState(
        state => ({
          score: state.score + 1
        }),
        () => {
          this.checkForWin();
        }
      );
    }
  }

  checkForWin() {
    const { score } = this.state;

    if (score >= MAX_SCORE) {
      this.setState(state => ({
        isPlaying: false,
        gamesPlayed: state.gamesPlayed + 1,
        targetLeftPosition: state.targetLeftPosition,
        targetTopPosition: state.windowHeight + 100
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
        <Message gamesPlayed={gamesPlayed} isPlaying={isPlaying} />
        <PlayButton
          gamesPlayed={gamesPlayed}
          handleClick={this.startGame}
          isPlaying={isPlaying}
        />
        <Scoreboard isPlaying={isPlaying} score={score} />
        <Target
          handleDroneHit={this.handleDroneHit}
          handleTransitionEnd={this.handleTransitionEnd}
          styles={targetStyle}
        />
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById("react-spa"));
