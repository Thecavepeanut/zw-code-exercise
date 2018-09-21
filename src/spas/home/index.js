import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './home.font'

import GameBoard from './gameBoard'
import Start from './start'

class HomeSPA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startGame: false,
        }
        this.playGame = this.playGame.bind(this)
        this.reset = this.reset.bind(this)
    }

    playGame() {
        this.setState({ startGame: true })
    }

    reset() {
        this.setState({ startGame: false })
    }

    render() {
        const { startGame } = this.state

        return (
            <div className='App'>
                {startGame
                    ? <GameBoard reset={this.reset} />
                    : <Start start={this.playGame} />
                }
            </div>
        )
    }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))
