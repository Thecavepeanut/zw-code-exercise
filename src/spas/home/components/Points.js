import React, { Component } from "react";
import Beer from "../icons/beer.svg";

class Points extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const points = [];
    for (let i = 0; i < this.props.count; i++) {
      points.push(<Beer key={i} className="points" />);
    }
    return (
      <div id="scoreContainer">
        <h2>Score:</h2>
        {this.props.count > 0 ? <div>{points}</div> : <div />}
      </div>
    );
  }
}

export default Points;
