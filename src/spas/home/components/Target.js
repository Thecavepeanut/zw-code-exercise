import React from "react";
import Drone from "../drone.svg";

const Target = ({ styles, handleTransitionEnd, handleDroneHit }) => (
  <div
    className="game__target"
    style={styles}
    onTransitionEnd={handleTransitionEnd}
  >
    <Drone onClick={handleDroneHit} />
  </div>
);
export default Target;
