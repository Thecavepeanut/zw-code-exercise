import React, { Component } from 'react'

export class GameInactivePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="greeting-page">
                    <h1 className="greeting-text">Greetings!</h1>
                </div>
            </div>
        );
    }
}

export default GameInactivePage