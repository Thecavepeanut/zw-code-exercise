import React, { Component } from "react";
import Beer from "./icons/beer.svg";

class BeerPoints extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const points = [];
    for (let i = 0; i < this.props.count; i++) {
      points.push(<Beer key={i} />);
    }
    return <div>{points}</div>;
  }
}

export default BeerPoints;
