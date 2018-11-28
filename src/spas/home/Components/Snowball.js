import SnowballSVG from "../snowball.svg";
import React from "react";

const Snowball = props => (
    !props.completed ? (<div onClick={props.handleClick}>
        <SnowballSVG />
    </div>) : <div>You made a snowman!</div>

)

export default Snowball
