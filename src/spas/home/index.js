import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "./home.font";
import Game from "./Game";

class HomeSPA extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById("react-spa"));
