import React, { Component } from 'react'

import Score from './Score'
import MenuModal from './MenuModal'
import GameBoard from "./GameBoard"

import Js from '../../assets/javascript.svg'
import Python from '../../assets/python.svg'
import Cpp from '../../assets/c.svg'


export default class GameScreen extends Component {
    constructor() {
        super()
        this.state = {
            clicks: 0,
            totalClicks: 0,
            showModal: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleRandomClick = this.handleRandomClick.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.continueGame = this.continueGame.bind(this)
        this.renderSvg = this.renderSvg.bind(this)
  }

    handleClick() {
        this.setState( state => ({
                clicks: state.clicks + 2,
            }), () => {
                if(this.state.clicks >= 10)
                    return this.props.switchScreens('Winner', {clicks: this.state.clicks});
            })
     }

    handleRandomClick() {
        this.setState( state =>  ({ 
                clicks: --state.clicks,
                totalClicks: ++state.totalClicks,
            }), () => {
                if(this.state.clicks < 0)
                    return this.props.switchScreens('Looser', {totalClicks: this.state.totalClicks});
            })
    }

    resetGame() {
        this.setState({
            clicks: 0,
            totalClicks: 0,
            showModal: false,
        })
    }

    continueGame() {
        this.setState({
            showModal: false,
        })
    }

    renderSvg(name) {
        switch(name) {
            case 'Python':
                return <Python className="player-icon"/>;
            case 'Js':
                return <Js className="player-icon" /> ;
            case 'C++':
            default:
                return <Cpp className="player-icon"/>;
        }
    }

    render() {
        const {playerName, switchScreens} = this.props
        const {showModal, clicks } = this.state
        return (
            <div className="screen game-screen">

                <header className="screen-header">
                    <span> {this.renderSvg(playerName)} </span>
                    <Score
                        clicks={clicks}
                        switchScreens={switchScreens}
                    />

                    <button 
                        className="menu-btn"
                        onClick={() => this.setState({showModal: true})}
                        >  Menu </button>
                </header>

                <GameBoard
                    playerName={playerName}
                    paused={showModal}
                    handleClick={this.handleClick} 
                    handleRandomClick={this.handleRandomClick}
                />


                { showModal && 
                <MenuModal 
                    resetGame={this.resetGame}
                    continueGame={this.continueGame}
                    {...this.props} 
                /> }

            </div>
        )
    }
}
