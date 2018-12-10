import React, { Component } from "react";
import ReactDOM from "react-dom";

class WinningScreen extends Component {
  render() {
    return (
      <div className="winningScreen">
        <div>
          Congratulations! You've clicked 10 times! <button onClick={this.props.newGame}>Play Again</button>
        </div>
      </div>
    );
  }
}

export default WinningScreen;
