import React, { Component } from 'react';

export default class Container extends Component {
    constructor(){
        super();
        this.state = {
            style: {}
        };
    }

    componentDidMount(){
        
    }

    render(){
        return <div style={this.state.style} >
            {this.props.children}
        </div>
    }
}