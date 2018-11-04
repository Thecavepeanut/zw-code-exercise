import React from 'react';
import './Paddle.scss';
import EVENTS from '../../Events';
import CONFIG from '../../Config';

const { PADDLE_SIZE } = CONFIG;

export default class Paddle extends React.Component {
    
    constructor() {
        super();

        this.state = { 
            position: {
                x: 0,
                y: 0
            }
        };
    }

    handleWindowResized = size => {
        this.setState({
            position: {
                x: size.width / 2 - PADDLE_SIZE.width / 2,
                y: size.height - 100
            }
        });
    }

    componentDidMount() {
        const { position } = this.state;
        
        document.addEventListener('mousemove', this.handleMouseMove);
        observer.subscribe(EVENTS.WINDOW_RESIZED, this.handleWindowResized);
        observer.publish(EVENTS.PADDLE_MOVED, position);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove = event => {
        const { clientX } = event;

        const { y } = this.state.position;
        const { width } = PADDLE_SIZE;
        const { observer } = window;

        const position = {
            x: clientX - width/2,
            y
        };

        this.setState({ position });

        observer.publish(EVENTS.PADDLE_MOVED, position);
    }

    render() {
        const { x, y } = this.state.position;
        const { width, height } = PADDLE_SIZE;
        const transform = `translate(${x}px, ${y}px)`;

        return (
            <div style={{transform, width, height}} className="Paddle" />
        )
    }
}