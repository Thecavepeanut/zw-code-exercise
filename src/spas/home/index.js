import React, { Component } from "react";
import ReactDOM from "react-dom";
// styles
import "./styles.scss";
// iconts
import GithubKitty from "./github.svg";
import "./home.font";
// components
import GameBoard from "./components/GameBoard";

class HomeSPA extends Component {
    render() {
        return (
            <div className="container">
                <h1>Github Kitty Game</h1>
                <GameBoard />
            </div>
        );
    }
}

export default HomeSPA;
