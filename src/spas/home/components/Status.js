import React, { Component } from 'react'
import GameParameter from '../GameParameter.json'

export class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: GameParameter.totalMiliSec
        }
    }
    
    tick() {
        this.setState((state) => {
            return {
                timer: state.timer - 1
            };
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10);
    }

    componentDidUpdate() {
        if (this.state.timer <= 0) {
            this.props.onTimeUp();
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let icons = [];
        for (let i = 0; i < this.props.scoreNum; i++) {
            const icon = <span key={i} className="icon icon-beer" />;
            icons.push(icon);
        }


        return (
            <nav>
                <div className="status-text">Score: {icons} </div>
                <div className="status-text">Time Left: <span className="timer">{this.state.timer}</span></div>
            </nav>
        )
    }
}

export default Status