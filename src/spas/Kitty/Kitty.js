import React, { Component } from "react";
import ReactDOM from "react-dom";
import GithubKitty from "./github.svg";

const LEFT = "LEFT";
const RIGHT = "RIGHT";
const TOP = "TOP";
const BOTTOM = "BOTTOM";

class Kitty extends Component {
  constructor() {
    super();

    this.animate = this.animate.bind(this);

    let maxHeight = window.innerHeight - 100;
    let maxWidth = window.innerWidth - 100;
    let posX = Math.floor(Math.random() * maxWidth);
    let posY = Math.floor(Math.random() * maxHeight);

    let angle = Math.random() * 2 * Math.PI;
    let speed = window.innerWidth / 20; //cross screen every 20 ms

    this.state = { angle, speed, posX, posY, lastWallHit: null };
    requestAnimationFrame(() => this.animate(new Date().getTime()));
  }
  animate(lastTime) {
    let angle = this.state.angle;
    let lastHit = this.state.lastHit;
    if (this.state.posY >= window.innerHeight - 100 && lastHit !== BOTTOM) {
      // bottom
      angle = 2 * Math.PI - angle;
      lastHit = BOTTOM;
    }
    if (this.state.posX >= window.innerWidth - 100 && lastHit !== RIGHT) {
      //right
      angle = 2 * Math.PI - (angle + Math.PI);
      lastHit = RIGHT;
    }
    if (this.state.posX <= 0 && lastHit !== LEFT) {
      //left
      angle = 2 * Math.PI - (angle + Math.PI);
      lastHit = LEFT;
    }
    if (this.state.posY <= 0 && lastHit !== TOP) {
      //top
      angle = 2 * Math.PI - angle;
      lastHit = TOP;
    }

    let current = Math.round(new Date().getTime());
    let deltaT = current - lastTime;

    let posX =
      this.state.posX + (Math.cos(angle) * this.state.speed * deltaT) / 200;
    let posY =
      this.state.posY + (Math.sin(angle) * this.state.speed * deltaT) / 200;

    this.setState({
      posX,
      posY,
      angle,
      lastHit
    }),
      requestAnimationFrame(() => this.animate(current));
  }

  render() {
    return (
      <div
        className="kitty"
        onClick={this.props.click}
        style={{ top: this.state.posY, left: this.state.posX }}
      >
        <GithubKitty />
      </div>
    );
  }
}

export default Kitty;
