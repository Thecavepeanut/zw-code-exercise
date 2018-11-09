import React, { Component } from 'react'
import BouncingCat from './BouncingCat'

export class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timeUp: false
        }
        this.clickingCat = this.clickingCat.bind(this);
    }

    clickingCat() {
        this.setState((state, props) => {
            return {
                score: this.state.score + 1
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.score}</h1>
                <BouncingCat onClickingCat={this.clickingCat} />
            </div>
        );
    }
}

export default GamePage