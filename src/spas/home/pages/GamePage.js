import React, { Component } from 'react'
import '../styles.scss'
import Board from '../components/Board'

class GamePage extends Component {
  render() {
    return (
      <div className="container GamePage">
        <Board />
      </div>
    )
  }
}

export default GamePage
