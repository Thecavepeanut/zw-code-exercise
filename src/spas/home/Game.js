import React, { Component } from "react";
import GameLoop from "../../utils/game-loop";
import Target from "./Target";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.loop = new GameLoop();
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.loop.start();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    this.loop.stop();
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    return (
      <div>
        <Target
          boundary={[0, this.state.width, this.state.height, 0]}
          loop={this.loop}
        />
      </div>
    );
  }
}
