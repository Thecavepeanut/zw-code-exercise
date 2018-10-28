import React from 'react'

const winner = ({ playAgain }) => (
  <div id="modal">
    <div className="modal-content">
      <h1>You Won!</h1>
      <button onClick={playAgain}>Play Again</button>
    </div>
  </div>
)

export default winner