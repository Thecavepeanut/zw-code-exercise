import React, {Component} from 'react';

class Lose extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="screen">
                <div className="screen__menu">
                    <div className="screen__title">You Lose!</div>
                    <button className="button" onClick={this.props.resetGame}>Click To Play Again</button>
                </div> 
            </div>
            
        );
    }
}

export default Lose;