import React from "react";
import Drone from "../drone.svg";

const Target = ({ handleDroneHit, handleTransitionEnd, styles }) => (
  <div
    className="game__target"
    style={styles}
    onTransitionEnd={handleTransitionEnd}
  >
    <Drone onClick={handleDroneHit} />
  </div>
);
export default Target;
