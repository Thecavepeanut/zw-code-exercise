import GithubKitty from './github.svg'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

const GenScoreBeers = ({ score = 0 }) => {
    if (score > 0) {
        return (
            <Fragment>
                {
                    [...Array(score)].map((e, i) => <span key={i} className="icon icon-beer" />)
                }
            </Fragment>
        )
    }
    return null;
}

GenScoreBeers.propTypes = {
    score: PropTypes.number.isRequired
}

class GamePlayScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotation: 'clockwise',
            x: 0,
            y: 0,
            movementStyles: {}
        };
        this.kittyMovement = this.kittyMovement.bind(this);
        this.getRandomTime = this.getRandomTime.bind(this);
    }

    getRandomPosition() {
        const height = window.innerHeight - 200,
            width = window.innerWidth - 200;
        const randomX = Math.floor(Math.random() * width),
            randomY = Math.floor(Math.random() * height);
        return { x: randomX, y: randomY };
    }

    getRandomTime(min, max) {
        return Math.random() * (max - min) + min;
    }

    kittyMovement() {
        let { rotation } = this.state;

        // generate random x/y coordinates and transition times
        const pos = this.getRandomPosition(),
            transitionTime = this.getRandomTime(1500, 3000);

        const movementStyles = {
            transition: `${Math.floor(transitionTime / 1000)}s linear`,
            transform: `translate(${pos.x}px, ${pos.y}px)`
        };

        this.setState({
            x: pos.x,
            y: pos.y,
            rotation: (rotation === 'clockwise' ? 'counter-clockwise' : 'clockwise'),
            movementStyles
        })

        this.timerId = setTimeout(this.kittyMovement, transitionTime);
    }

    componentDidMount() {
        this.timer = setTimeout(this.kittyMovement, 1);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { rotation, movementStyles } = this.state;
        const { score = 0, onClickKitty } = this.props;

        return (
            <div id="game-play-screen">
                <div className="score-header">
                    <h1>Score:</h1><GenScoreBeers score={score} />
                </div>
                <div style={movementStyles}>
                    <GithubKitty className={rotation} onClick={onClickKitty} />
                </div>
            </div>
        )
    }
}

GamePlayScreen.propTypes = {
    onClickKitty: PropTypes.func.isRequired,
    score: PropTypes.number
}

export default GamePlayScreen;