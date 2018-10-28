import React from 'react'

const startGame = ({ playGame }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Whack-a-mole</h1>
        <p>Click on 10 moles to win</p>
        <button onClick={playGame}>Start Game</button>
      </div>
    </div>
  )
}

export default startGame