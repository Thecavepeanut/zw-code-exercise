import React, { Component } from "react";
import GithubKitty from "./github.svg";

export default class Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setGameState } = this.props;
    return (
      <div className="button-box">
        <button
          onClick={() => setGameState("happening")}
          className="button-style"
        >
          Are You Ready?
        </button>
        <GithubKitty
          style={{ height: "100px", width: "100px", paddingTop: "10px" }}
        />
      </div>
    );
  }
}
