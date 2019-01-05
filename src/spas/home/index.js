import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Game from "./Game";
// import Won from "./Won";
import Start from "./Start";

import "./home.font";

class HomeSPA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: "start",
      version: "normal"
    };
    this.setGameState = this.setGameState.bind(this);
  }

  setGameState(newState) {
    this.setState({ game: newState });
  }

  render() {
    const { version, game } = this.state;
    switch (game) {
      // case "won":
      //   return <Won setGameState={this.setGameState} />;
      case "start":
        return <Start setGameState={this.setGameState} />;
      case "happening":
        return <Game version={version} />;
      default:
        return <Start />;
    }
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById("react-spa"));
