import PropTypes from 'prop-types'
import React from 'react'

const WinnerScreen = ({ onResetGame }) => {

    return (
        <div>
            <h1>You're a winner!!!</h1>
            <h1>You're a winner!!!</h1>
            <h1>You're a winner!!!</h1>
            <h1>You're a winner!!!</h1>
            <h1>You're a winner!!!</h1>
            <button onClick={onResetGame}>Reset</button>
        </div>
    )

}

WinnerScreen.propTypes = {
    onResetGame: PropTypes.func.isRequired
}

export default WinnerScreen;
