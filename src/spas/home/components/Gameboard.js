import React, { Component } from "react";
import GithubKitty from "../github.svg";

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animations: [
                "pulse",
                "spin-move",
                "speedy",
                "reverse-spin-move",
                "multiply"
            ],
            animationNum: 0,
            durations: ["10s", "10s", "10s", "10s", "10s"]
        };
        this.getAnimationName = this.getAnimationName.bind(this);
    }

    getAnimationName() {
        const random = Math.floor(Math.random() * 5);

        this.setState(function(state) {
            return {
                animationNum: random
            };
        });
    }

    render() {
        const { animationNum, animations, durations } = this.state;
        return (
            <div className="board">
                <GithubKitty
                    className="kitty"
                    fill="red"
                    onClick={this.props.keepScore}
                    style={{
                        // WebkitAnimationName: `${animations[animationNum]}`,
                        // WebkitAnimationDuration: `${durations[animationNum]}`,
                        animationName: `${animations[animationNum]}`,
                        animationDuration: `${durations[animationNum]}`,
                        animationTimingFunction: "linear",
                        animationIterationCount: "infinite"
                    }}
                />
            </div>
        );
    }
}

export default Gameboard;
