import React, { Component } from 'react'
import GithubKitty from '../../github.svg'
import './Board.css'

const SIZE = {
  CELL_SIZE: 20,
  WIDTH: 800,
  HEIGHT: 600,
}

class Board extends Component {
  constructor() {
    super()
    this.state = {}
  }

  setBoardEl(board) {
    console.log(board)
  }

  componentDidMount() {}

  traverse() {}

  onClickHandle() {}

  getClickPosition() {}

  render() {
    return (
      <div>
        <div
          ref={this.setBoardEl}
          className="Game-board"
          style={{ width: SIZE.WIDTH, height: SIZE.HEIGHT }}
        />
      </div>
    )
  }
}

export default Board
