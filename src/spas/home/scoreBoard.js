import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/**
 * for maintaining scores and show winner message.
 */
class ScoreBoard extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    let className = "winnerLabel " + (this.props.showWinner == true ? "" : "hideWinner");

    return (
      <div className="scoreboard">
        {Array.apply(0, Array(this.props.score)).map((item, i) => {
          return (
            <span key={i} className="icon icon-beer"></span>
          )
        })}
        <p>
          <span>Score:{this.props.score}</span>
        </p>
        <p className={className} >
          You are a winner!  Refresh page to play again.
          </p>
      </div>
    )

  }
}

export default ScoreBoard;