import React, { Component, Fragment } from 'react'
import { BoardConsumer } from '../Board/BoardContext'
import 'bulma/css/bulma.css'
import './Score.scss'

class ScoreDisplay extends Component {
  render() {
    return (
      <BoardConsumer>
        {context => {
          const { score } = context
          return (
            <Fragment>
              <div className="title has-text-white Score-item has-text-success">
                {score === 0 && <h1>> Hello kitty!</h1>}
                {score > 0 && score <= 5 && <h1>Tag that kitty!</h1>}
                {score > 5 && <h1>You win!</h1>}
              </div>
              <div className="title has-text-white Score-item has-text-success">
                <h1>Score: {score}</h1>
              </div>
            </Fragment>
          )
        }}
      </BoardConsumer>
    )
  }
}

export default ScoreDisplay
