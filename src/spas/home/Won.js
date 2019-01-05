import React, { Component } from "react";
import GithubKitty from "./github.svg";

const Won = props => {
  const { setGameState } = props;
  return (
    <div className="button-box">
      <div className="congratulations">Congratulations! You Won!</div>
      <button onClick={() => setGameState("normal")} className="button-style">
        Try Again?
      </button>
      <button onClick={() => setGameState("soviet")} className="button-style">
        Play Soviet Edition
      </button>
      <GithubKitty className="cat-won" />
    </div>
  );
};

export default Won;
