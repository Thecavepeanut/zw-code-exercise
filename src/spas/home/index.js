import React, { Component } from 'react'

import './styles.scss'
import './home.font'
import Mole from './mole.js'
import Clicks from './clicks.js'
import Winner from './winner.js'
import StartGame from './startGame.js'

export default class HomeSPA extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
        }
        this.svgInterval
        this.generateSizeAndPosition = this.generateSizeAndPosition.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.playGame = this.playGame.bind(this)
        this.playAgain = this.playAgain.bind(this)
        this.renderView = this.renderView.bind(this)
    }

    generateSizeAndPosition() {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const moleWidth = Math.floor(windowWidth / 10) > 50 ? Math.floor(windowWidth / 10) : 50
        let posX = Math.floor(Math.random() * (windowWidth - moleWidth))
        let posY = Math.floor(Math.random() * (windowHeight - moleWidth - 30)) + 30 //30 to account for score bar
        this.setState({ moleWidth, posX, posY })
    }

    handleClick() {
        this.setState(prevState => { return { score: prevState.score + 1 } }, () => {
            if (this.state.score === 10) {
                clearInterval(this.svgInterval)
                this.setState({ view: 'wonGame' })
            }
        })
    }

    playGame() {
        document.getElementById('modal').style.display = 'none'
        this.setState({ view: 'inGame' })
        this.generateSizeAndPosition() //get first size and position
        this.svgInterval = setInterval(() => {
            this.generateSizeAndPosition()
        }, 1000)
    }

    playAgain() {
        this.setState({
            view: 'inGame',
            score: 0
        }, this.playGame());
    }

    renderView() {
        if (this.state.view === 'inGame') {
            return (
                <Mole
                    width={this.state.moleWidth}
                    color={this.state.color}
                    posX={this.state.posX}
                    posY={this.state.posY}
                    handleClick={this.handleClick}
                />
            )
        } else if (this.state.view === 'wonGame') {
            return ( <Winner playAgain={this.playAgain} /> )
        } else {
            return ( <StartGame playGame={this.playGame} /> )
        }
    }

    render() {
        return (
            <div>
                <Clicks score={this.state.score} />
                {this.renderView()}
            </div>
        )
    }
}