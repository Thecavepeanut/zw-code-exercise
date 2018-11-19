import React, {PureComponent} from 'react'
import config from '../data/config.json'
import {gameTime} from '../utils/index';

class GameStats extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            time: config.game.duration
        }
    }

    tick() {
      this.setState({time: this.state.time - 1});
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10);
    }

    componentDidUpdate() {
        if (this.state.time <= 0) {
          this.props.timeEnded();
        }
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    renderScore() {
      let icons = [];
      for (let i = 0; i < this.props.currentScore; i++) {
          const icon = <span key={i} className="icon icon-beer" />;
          icons.push(icon);
      }
      return icons;
    }

    render() {
      const {seconds, centiseconds} = gameTime(this.state.time);
      return (
              <div className="nav-bar">
                  <div className="game-stats-text">Current Score: {this.renderScore()} </div>
                  <div className="game-stats-text">Time Elapsed: <span className="timer">{seconds}:{centiseconds}</span></div>
              </div>
      )
    }
}

export default GameStats;
