import React from "react";
import GithubKitty from "./github.svg";

const Start = props => {
  const { setGameState } = props;
  return (
    <div className="button-box">
      <button onClick={() => setGameState("normal")} className="button-style">
        Are You Ready?
      </button>
      <GithubKitty
        style={{ height: "100px", width: "100px", paddingTop: "10px" }}
      />
    </div>
  );
};
export default Start;
