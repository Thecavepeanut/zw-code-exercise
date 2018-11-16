import React from 'react'

export default function LoserScreen({playerName, switchScreens}) {
    return (
        <div className="screen loser-screen">
            <div className="screen-title"> 
                Sorry, you didn't debug using {playerName}. 
            </div>
            <button 
                className="screen-btn"
                onClick={() => switchScreens('Game')}>
                    Try Again 
            </button>
            <button 
                className="screen-btn"
                onClick={() => switchScreens('Home')}>
                    Home
            </button>
        </div>
    )
  }
