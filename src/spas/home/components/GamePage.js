import React, { Component } from 'react'
import BouncingCat from './BouncingCat'
import Status from './Status'
import GameParameter from '../GameParameter.json'


export class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            timeUp: false
        }
        this.clickingCat = this.clickingCat.bind(this);
        this.timeRunUp = this.timeRunUp.bind(this);
    }

    componentDidUpdate() {
        if (this.state.score >= GameParameter.maxScore) {
            this.props.onGameOver(false);//gameLost: false
        }else if(this.state.timeUp){
            this.props.onGameOver(true);//gameLost: true
        }
    }

    clickingCat() {
        this.setState((state) => {
            return {
                score: state.score + 1
            };
        });
    }

    timeRunUp(){
        this.setState(() => {
            return {
                timeUp: true
            }
        });
    }

    render() {
        return (
            <div>
                <Status scoreNum={this.state.score} onTimeUp={this.timeRunUp} />
                <BouncingCat onClickingCat={this.clickingCat} />
            </div>
        );
    }
}

export default GamePage