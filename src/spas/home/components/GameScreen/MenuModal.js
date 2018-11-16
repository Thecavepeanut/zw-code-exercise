import React from 'react'

export default function GameModal(props) {
    return (
        <div className="modal-window">
            <div className="modal-body">
                <h1 className="screen-title"> Menu </h1>

                <button onClick={() => props.switchScreens('Home')}>
                    Quit 
                </button>

                <button onClick={() => props.resetGame()}> 
                    Reset
                </button>

                <button onClick={() => props.continueGame()}>
                    Continue
                </button>
                
                </div>
        </div>
    )
  }
