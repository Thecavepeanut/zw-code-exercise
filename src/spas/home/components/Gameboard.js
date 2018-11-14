import React, { Component } from "react";
import GithubKitty from "../github.svg";

class Gameboard extends Component {
    render() {
        return (
            <div className="board">
                <GithubKitty fill="red" onClick={this.props.keepScore} />
            </div>
        );
    }
}

export default Gameboard;
