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
    this.playAgain = this.playAgain.bind(this);

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
        playerWon: true,
      });
    }
  }
  playAgain() {
    this.setState({ playerWon: false, clicked: 0 });
  }
  render() {
    let arrayCount = new Array(this.state.clicked).fill(null);
    return (
      <div>
        <div className="score">
            {arrayCount.map( (_, i) => (
            <span className="icon icon-beer" key={i} />
            ))}
        </div>
        {this.state.playerWon ? (
          <WinningScreen playAgain={this.playAgain} />
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
