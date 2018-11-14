import React, { Component } from "react";
import ReactDOM from "react-dom";
// styles
import "./styles.scss";
// iconts
import GithubKitty from "./github.svg";
import "./home.font";
// components
import GameBoard from "./components/GameBoard";
import BeerScore from "./components/BeerScore";

class HomeSPA extends Component {
    render() {
        return (
            <div className="container">
                <h1>Github Kitty Game</h1>
                <BeerScore />
                <GameBoard />
            </div>
        );
    }
}

export default HomeSPA;
