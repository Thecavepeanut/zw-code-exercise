import React, {Component} from 'react';
import GameState from './index';

class Start extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="start-screen">
                <div className="start-screen__menu">
                    <div className="start-screen__title">Let's do this.</div>
                    <button className="start-screen__button" onClick={this.props.startGame}>Click To Start</button>
                </div>
            </div>
            
        );
    }
}

export default Start;