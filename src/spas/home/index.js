import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Game from "./Game";
import Won from "./Won";
import Start from "./Start";

import "./home.font";

class HomeSPA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: "start"
    };
    this.setGameState = this.setGameState.bind(this);
  }

  setGameState(newState) {
    this.setState({ game: newState });
  }

  setGameVersion(newVersion) {
    this.setState({ version: newVersion });
  }

  render() {
    const { game } = this.state;
    switch (game) {
      case "won":
        return <Won setGameState={this.setGameState} />;
      case "start":
        return <Start setGameState={this.setGameState} />;
      case "normal":
        return <Game game={game} setGameState={this.setGameState} />;
      case "soviet":
        return <Game game={game} setGameState={this.setGameState} />;
      default:
        return <Start />;
    }
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById("react-spa"));
