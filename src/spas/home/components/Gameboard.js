import React, { Component } from "react";
import GithubKitty from "../github.svg";

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animations: ["pulse", "spin-move", "speedy", "reverse-spin-move"],
            animationNum: 0,
            durations: ["2s", "4s", "4s", "4s"],
            top: 0,
            left: 0
        };
        this.getAnimationName = this.getAnimationName.bind(this);
    }

    getAnimationName() {
        const random = Math.floor(Math.random() * 4);

        this.setState(function(state) {
            return {
                animationNum: random
            };
        });
    }

    speedyAnimation() {
        const top = Math.floor(Math.random() * 450);
        const left = Math.floor(Math.random() * 75);

        this.setState(function(state) {
            return {
                top: top,
                left: left
            };
        });
    }

    render() {
        const { animationNum, animations, durations, top, left } = this.state;
        return (
            <div className="board">
                <GithubKitty
                    className="kitty"
                    fill="red"
                    onClick={() => {
                        this.getAnimationName();
                        this.props.keepScore();
                    }}
                    onMouseOver={() => {
                        if (animationNum === 2) {
                            setTimeout(() => {
                                this.speedyAnimation();
                            }, 200);
                        }
                    }}
                    style={
                        animationNum === 2
                            ? { marginTop: `${top}px`, marginLeft: `${left}vw` }
                            : {
                                  WebkitAnimationName: `${
                                      animations[animationNum]
                                  }`,
                                  WebkitAnimationDuration: `${
                                      durations[animationNum]
                                  }`,
                                  animationName: `${animations[animationNum]}`,
                                  animationDuration: `${
                                      durations[animationNum]
                                  }`,
                                  animationTimingFunction: "linear",
                                  animationIterationCount: "infinite"
                              }
                    }
                />
            </div>
        );
    }
}

export default Gameboard;
