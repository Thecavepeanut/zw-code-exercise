import React, { Component, Fragment } from 'react'
import { BoardConsumer } from '../Board/BoardContext'
import GithubKitty from '../../github.svg'
import './BoardPiece.scss'
import 'bulma/css/bulma.css'

const initialState = {
  // First color will be white
  fill: '#fff',
  rotation: 0,
}

class BoardPiece extends Component {
  constructor() {
    super()
    this.state = initialState
    this.changeColor = this.setColor.bind(this)
    this.changeColorInterval = setInterval(() => this.changeColor(), 1000)

    this.changeRotation = this.setRotation.bind(this)
    this.changeRotationInterval = setInterval(() => this.changeRotation(), 100)
  }

  componentWillUnmount() {
    // Unsubscribe to prevent memory leak
    clearInterval(this.changeColorInterval)
    clearInterval(this.changeRotationInterval)
  }

  setColor() {
    const fill =
      '#' +
      Math.random()
        .toString(16)
        .substr(-6)
    this.setState({ fill })
  }

  setRotation() {
    this.setState({ rotation: this.state.rotation + 20 })
  }

  render() {
    const { fill, rotation } = this.state

    return (
      <BoardConsumer>
        {context => {
          const { top, left, onClickPiece, score } = context
          const direction = score % 2 === 0 ? '' : '-'
          const transform = `rotate(${direction}${rotation}deg)`

          return (
            <Fragment>
              {score > 5 && (
                <h1 className="piece-wrapper" style={{ color: fill, left, top }}>
                  YOU WIN!!!! YAAAAY!!!
                </h1>
              )}
              {score <= 5 && (
                <div className="piece-wrapper" onClick={() => onClickPiece()} style={{ left, top }}>
                  <GithubKitty className="Board-piece" style={{ fill, transform }} />
                </div>
              )}
            </Fragment>
          )
        }}
      </BoardConsumer>
    )
  }
}

export default BoardPiece
