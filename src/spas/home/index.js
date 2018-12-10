import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Kitty from "../Kitty/Kitty.js";
import WinningScreen from "../WinningScreen/WinningScreen.js";
import "./home.font";

class HomeSPA extends Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
    this.newGame = this.newGame.bind(this);

    this.state = {
      clicked: 0,
      playerWon: false
    };
  }

  clicked() {
    this.setState({
      clicked: this.state.clicked + 1
    });
    if (this.state.clicked >= 9) {
      this.setState({
        playerWon: true
      });
    }
  }

  newGame() {
    this.setState({ playerWon: false, clicked: 0 });
  }

  render() {
    return (
      <div className="mainApp">
        <div className="scoreboard">
          {Array.apply(null, { length: this.state.clicked }).map((_, i) => (
            <span className="icon icon-beer" key={i} />
          ))}
        </div>
        {this.state.playerWon ? (
          <WinningScreen newGame={this.newGame} />
        ) : (
          <div>
            <Kitty click={this.clicked} />
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById("react-spa"));
