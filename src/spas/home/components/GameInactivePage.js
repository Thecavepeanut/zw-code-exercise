import React, { Component } from 'react'

export class GameInactivePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.playGame = this.playGame.bind(this);
    }

    playGame(){
        this.props.onPlayNewGame();
    }

    render() {
        const buttonText = this.props.onGameLost === null ? "Start Game" : "Play Again";
            
        return (
            <div>
                <div className="game-inactive-page">
                    <h1 className="inactive-page-text">{this.props.textMessage}</h1>
                    <button className="play-button" onClick={this.playGame}>{buttonText}</button>
                </div>
            </div>
        );
    }
}

export default GameInactivePage