import React from 'react';
import ZipCat from '../../components/ZipCat/ZipCat';
import Paddle from '../../components/Paddle/Paddle';
import EVENTS from '../../Events';
import './Play.scss';
import Button from '../../components/Button/Button';

export default class Play extends React.Component {

    constructor() {
        super();

        this.state = {
            size: {
                width: 0,
                height: 0
            },
            score: 0,
            showGameOverScreen: false,
        };
    }

    handlePlayerDied = () => {
        this.setState({
            showGameOverScreen: true
        });
    }

    handlePlayerScored = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    handleWindowResized = size => {
        this.setState({ size });
    }

    publishWindowResized = event => {
        const { observer } = window;

        observer.publish(EVENTS.WINDOW_RESIZED, {
            width: event.target.innerWidth,
            height: event.target.innerHeight
        });
    }
    
    componentDidMount() {
        const { observer } = window;

        observer.subscribe(EVENTS.PLAYER_SCORED, this.handlePlayerScored);
        observer.subscribe(EVENTS.WINDOW_RESIZED, this.handleWindowResized);
        observer.subscribe(EVENTS.PLAYER_DIED, this.handlePlayerDied);

        window.addEventListener('resize', this.publishWindowResized);

        window.dispatchEvent(new Event('resize'));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.publishWindowResized);
    }

    renderGameOverScreen() {
        return (
            <div className="game-over-screen">
                <Button label="Play again" onClick={this.publishPlayClicked} />
                <Button label="Go home" onClick={this.publishHomeClicked} />
            </div>
        );
    }

    publishPlayClicked = () => {
        const { observer } = window;

        observer.publish(EVENTS.PLAY_CLICKED);
    }

    publishHomeClicked() {
        const { observer } = window;

        observer.publish(EVENTS.HOME_CLICKED);
    }

    render() {
        const { width, height } = this.state.size;
        const { score,showGameOverScreen } = this.state;

        return (
            <div className="Play">
                { showGameOverScreen && this.renderGameOverScreen() }

                { !showGameOverScreen && <Paddle /> }
                
                <h2 className="score">
                    Score: {score}
                </h2>
                
                <ZipCat bounds={{
                    top: 0,
                    left: 0,
                    right: width, 
                    bottom: height,
                }} />

                <img className="spikes" src="./home/spikes.png" />
            </div>
        )
    }
}