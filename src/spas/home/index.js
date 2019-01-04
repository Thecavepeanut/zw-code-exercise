import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import GithubKitty from "./github.svg";
import "./home.font";

class HomeSPA extends Component {
  render() {
    return (
      <div>
        <span className="icon icon-beer" />
        <div className="cat-box">
          <GithubKitty className="cat" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById("react-spa"));
