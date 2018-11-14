import React, { Component } from "react";
import ReactDOM from "react-dom";
// styles
import "./styles.scss";
// icons
import "./home.font";
// components
import GameBoard from "./components/GameBoard";
import BeerScore from "./components/BeerScore";

class HomeSPA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };

        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    // increment score by 1 when a player clicks kitty
    handleIncreaseScore() {
        this.setState(function(state) {
            return {
                score: state.score === 10 ? 0 : state.score + 1
            };
        });
    }

    render() {
        const { score } = this.state;
        console.log(`Score ${this.state.score}`);
        return (
            <div className="container">
                <h1>Github Kitty Game</h1>
                <BeerScore score={score} />
                <GameBoard keepScore={this.handleIncreaseScore} />
            </div>
        );
    }
}

export default HomeSPA;
