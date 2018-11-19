import React from 'react'
import config from '../data/config.json';

const EndGameScreen = ({gameStatus, startNewGame}) => {
      const {buttonMessage, statusMessage}  = config.gamestatus[gameStatus ? 'won': 'lost'];
        return (
            <div className="welcome-winning-screen">
                <h1 className="welcome-winning-text">{statusMessage}</h1>
                <button className="restart-button font-effect-anaglyph" onClick={startNewGame}>{buttonMessage}</button>
            </div>
        )
}

export default EndGameScreen;
