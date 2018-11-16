import React from 'react'

export default function WinnerScreen({playerName, switchScreens}) {
    return (
        <div className="screen winner-screen">
            <div className="screen-title"> 
                Congratulations! You can debug in {playerName} !!!  
            </div>

            <button 
                className="screen-btn"
                onClick={() => switchScreens('Game')}>
                    Play Again 
            </button>

            <button 
                className="screen-btn"
                onClick={() => switchScreens('Home')}>
                    Home
            </button>
        </div>
    )
}
