import React, {Component} from 'react';

class Win extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="start-screen">
                <div className="start-screen__menu">
                    <div className="start-screen__title">You Win!</div>
                    <button className="start-screen__button" onClick={this.props.resetGame}>Click To Play Again</button>
                </div>
            </div>
            
        );
    }
}

export default Win;