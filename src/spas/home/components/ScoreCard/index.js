import React, { Component } from 'react';

class ScoreCard extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default ScoreCard;
