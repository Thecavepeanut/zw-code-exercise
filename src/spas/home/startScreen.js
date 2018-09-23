import PropTypes from 'prop-types'
import React from 'react'

const StartScreen = ({ onStartGame }) => {

    return (
        <div>
            <h1>
                Welcome to the super simple Hello Kitty game. <br />
                Click Start to begin...
            </h1>
            <button onClick={onStartGame}>Start!</button>
        </div>
    )

}

StartScreen.propTypes = {
    onStartGame: PropTypes.func.isRequired
}

export default StartScreen;