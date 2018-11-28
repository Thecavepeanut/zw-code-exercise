import React, { Component } from "react";
import ReactDOM from "react-dom";
import Beer from "./icons/beer.svg";

class BeerPoints extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const points = [];
    for (let i = 0; i < this.props.count; i++) {
      points.push(<Beer />);
    }
    return <div>{points}</div>;
  }
}

export default BeerPoints;
