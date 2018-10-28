import React from 'react'

const startGame = ({ playGame }) => (
  <div id="modal">
    <div className="modal-content">
      <h1>Whack-A-Mole</h1>
      <p>Click on 10 moles to win</p>
      <button onClick={playGame}>Start Game</button>
    </div>
  </div>
)

export default startGame