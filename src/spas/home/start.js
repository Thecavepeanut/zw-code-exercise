import React, {Component} from 'react';

class Start extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="screen">
                <div className="screen__menu">
                    <div className="screen__title">Everybody likes dubstep, right?</div>
                    <button className="screen__button button" onClick={this.props.startGame}>Click To Start</button>
                </div>
            </div>
            
        );
    }
}

export default Start;