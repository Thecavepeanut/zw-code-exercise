import React, { Component } from 'react';

export default class Container extends Component {
    constructor(){
        super();
        this.state = {
            style: {}
        };
    }

    componentDidMount(){
        this.timer = setInterval(this.tick.bind(this), 100);
    }

    tick(){
        console.log(this.props);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return <div style={this.state.style} >
            {this.props.children}
        </div>
    }
}