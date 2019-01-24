import React, { Component } from "react";
import GithubKitty from "./github.svg";

const directions = {
  left: () => {},
  right: "RIGHT",
  down: "DOWN",
  up: "UP",
  upRight: "UPRIGHT",
  upLeft: "UPLEFT",
  downRight: "DOWNRIGHT",
  downLeft: "DOWNLEFT"
};

export default class Target extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 200,
      left: 40
    };

    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.props.loop.subscribe(this.update);
  }

  componentWillUnmount() {
    this.props.loop.unsubscribe(this.update);
  }

  update() {
    // console.log("tick");

    const newPosition = {
      left: this.state.left + 10,
      top: this.state.top
    };

    this.setState(newPosition);
  }

  componentDidUpdate(prevState, nextState) {
    const [top, right, bottom, left] = this.props.boundary;
    if (
      nextState.top < top + 30 ||
      nextState.top > bottom - 30 ||
      nextState.left < left + 30 ||
      nextState.left > right - 30
    ) {
      this.props.loop.unsubscribe(this.update);
      console.log("COLLISION");
    }
  }

  render() {
    return (
      <div
        style={{
          marginLeft: `${this.state.left}px`,
          marginTop: `${this.state.top}px`
        }}
      >
        <GithubKitty />
      </div>
    );
  }
}
