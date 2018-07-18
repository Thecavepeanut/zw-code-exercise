import React, { Component } from 'react';
import { generateRandom } from '../random';
export default class Container extends Component {
    constructor(){
        super();
        this.state = {
            style: {}
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
        const l = generateRandom(width - 100, 50);
        const h = generateRandom(height - 100, 50);
        this.setState({
            style: {
             transform: `translate(${l}px, ${h}px)`,
             transitionDuration: '0.4s',
            }
        })
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    click(){
        console.log(this.props)
    }

    render(){
        return <div style={this.state.style} onClick={this.click.bind(this)} >
            {this.props.children}
        </div>
    }
}