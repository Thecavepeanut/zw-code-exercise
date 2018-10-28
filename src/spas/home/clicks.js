import React, { Component }from 'react'
import './home.font'


export default class Clicks extends Component {
  renderNumberOfClicks() {
    let tableOfClicks = [];

    for (let i = 1; i < 11; i++) {
      i <= this.props.score
        ? tableOfClicks.push((<span className="icon icon-beer icon-click" key={i}/>)) 
        : tableOfClicks.push((<span className="icon icon-beer" key={i}/>))
    }

    return tableOfClicks;
  }

  render() {
    return (
      <div>
        {this.renderNumberOfClicks()}
      </div>
    )
  }
}