import React, {Component} from 'react';

class Win extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="screen">
                <div className="screen__menu">
                    <div className="screen__title">You Win!</div>
                    <button className="screen__button button button" onClick={this.props.resetGame}>Click To Play Again</button>
                </div>
            </div>
            
        );
    }
}

export default Win;