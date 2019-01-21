import React, { Component, Fragment } from 'react'
import { BoardProvider } from './BoardContext'
import BoardPiece from '../BoardPiece'
import ScoreDisplay from '../Score'
import './Board.scss'

const SIZE = {
  WIDTH: 800,
  HEIGHT: 600,
}

class Board extends Component {
  constructor() {
    super()
    this.state = {
      piecePositionX: null,
      piecePositionY: null,
      score: 0,
    }

    this.setBoardRef = element => {
      this.boardEl = element
    }

    this.traverse = this.traverse.bind(this)
    this.traverseInterval = setInterval(() => this.traverse(), 1000)
  }

  componentDidMount() {
    if (this.boardEl && !this.state.piecePositionX && !this.state.piecePositionY) {
      const board = this.boardEl.getBoundingClientRect()
      this.setRandomPositiions(board)
    }
  }

  componentWillUnmount() {
    clearInterval(this.traverseInterval)
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    // This is not working currently. Need to somehow get updated ref of board
    if (this.boardEl) {
      const board = boardEl.getBoundingClientRect()
      this.setRandomPositiions(board)
    }
  }

  setRandomPositiions(board) {
    this.setState({
      piecePositionX: this.getRandomInt(board.left, board.right * 0.75),
      piecePositionY: this.getRandomInt(board.top, board.bottom * 0.75),
    })
  }

  traverse() {
    const board = this.boardEl.getBoundingClientRect()

    this.setRandomPositiions(board)
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  onClickPiece() {
    const board = this.boardEl.getBoundingClientRect()

    this.setState({ score: ++this.state.score }, () => {
      this.setRandomPositiions(board)
    })
  }

  onClickResetGame() {
    const board = this.boardEl.getBoundingClientRect()

    this.setState(
      {
        score: 0,
      },
      this.setRandomPositiions(board)
    )
  }

  render() {
    const { piecePositionY, piecePositionX, score } = this.state

    return (
      <div>
        <div
          ref={e => this.setBoardRef(e)}
          className="Game-board"
          style={{ width: SIZE.WIDTH, height: SIZE.HEIGHT }}
        >
          <BoardProvider value={{ score, onClickResetGame: this.onClickResetGame.bind(this) }}>
            <ScoreDisplay />
          </BoardProvider>
          <BoardProvider
            value={{
              score,
              top: piecePositionY,
              left: piecePositionX,
              onClickPiece: this.onClickPiece.bind(this),
            }}
          >
            <BoardPiece />
          </BoardProvider>
        </div>
      </div>
    )
  }
}

export default Board
