import React from 'react'

const startGame = ({ playGame }) => (
  <div id="modal">
    <div className="modal-content">
      <h1>Whack-A-Mole</h1>
      <p>A wild mole has appeared in your backyard! He's a fast one. He won't go away until you've given him 10 beers. Click on him to him a beer.</p>
      <button onClick={playGame}>Start Game</button>
    </div>
  </div>
)

export default startGame