import React from "react";

const PlayButton = ({ isPlaying, handleClick, gamesPlayed }) => {
  const buttonText = gamesPlayed > 0 ? "Play Again" : "Start Game";

  if (!isPlaying) {
    return (
      <button className="game__button" onClick={handleClick}>
        {buttonText}
      </button>
    );
  }

  return null;
};

export default PlayButton;
