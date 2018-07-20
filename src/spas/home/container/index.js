import React, { Component } from 'react';
import { generateRandom } from '../random';
export default class Container extends Component {
    constructor(){
        super();
        this.state = {
            style: {
                visibility: 'hidden',
            }
        };
    }

    componentDidMount(){
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    tick(){
        const {
            height,
            width,
        } = this.props;
        const dimension = (height * width)/5120;
        const size = `${dimension}px`

        const l = generateRandom(width - dimension, dimension);
        const h = generateRandom(height - dimension, dimension);

        this.setState({
            style: {
             height: size,
             width: size,   
             transform: `translate(${l}px, ${h}px)`,
             transitionDuration: '0.4s',
            }
        })
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    click(e){
        e.stopPropagation();
        clearInterval(this.timer);
        const newStyle = Object.assign({ animation: 'color 0.5s infinite', pointerEvents: 'none' }, this.state.style);
        this.setState({
            style: newStyle 
        });
        this.timer = setInterval(this.tick.bind(this), 1000);
        this.props.clicked();
    }

    render(){
        return <div style={this.state.style} onClick={this.click.bind(this)} >
            {this.props.children}
        </div>
    }
}