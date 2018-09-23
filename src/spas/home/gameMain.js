import GamePlayScreen from './gamePlayScreen'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import StartScreen from './startScreen'
import WinnerScreen from './winnerScreen'
import './styles.scss'
import './home.font'

const HOME_SCREEN = 'home';
const GAME_PLAY_SCREEN = 'gamePlay';
const WINNER_SCREEN = 'winner';

class GameMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            screen: HOME_SCREEN
        }

        this.onStartGame = this.onStartGame.bind(this);
        this.onResetGame = this.onResetGame.bind(this);
        this.onClickKitty = this.onClickKitty.bind(this);
    }

    onStartGame() {
        this.setState({ screen: GAME_PLAY_SCREEN });
    }

    onResetGame() {
        this.setState({ score: 0, screen: HOME_SCREEN });
    }

    onClickKitty(e) {
        const { winningTotal = 10 } = this.props;
        let { score } = this.state;
        score++;

        if (score === winningTotal) {
            this.setState({ screen: WINNER_SCREEN });
        }
        else {
            this.setState({ score });
        }
    }

    render() {
        const { screen, score } = this.state;

        return (
            <Fragment>
                {
                    screen === GAME_PLAY_SCREEN ? <GamePlayScreen onClickKitty={this.onClickKitty} score={score} /> :
                        screen === WINNER_SCREEN ? <WinnerScreen onResetGame={this.onResetGame} /> :
                        <StartScreen onStartGame={this.onStartGame} />
                }
            </Fragment>
        )
    }
}

GameMain.propTypes = {
    winningTotal: PropTypes.number
}

export default GameMain;