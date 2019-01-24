import React from "react";
import "../home.font";

const Point = () => <span className="icon icon-flash" />;

const Scoreboard = ({ isPlaying, score }) => {
  if (isPlaying) {
    const scores = [...Array(score)].map((point, index) => (
      <Point key={index} />
    ));
    return (
      <div className="game__score">
        <span>Score:</span>
        {scores}
      </div>
    );
  }

  return null;
};
export default Scoreboard;
