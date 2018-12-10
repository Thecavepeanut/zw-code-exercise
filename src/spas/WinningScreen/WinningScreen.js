import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class WinningScreen extends Component {
    render(){
        return (
            <div >
                Congradulations! You've Clicked 10 times! <button onClick={this.props.playAgain}>Play Again</button>
            </div>
        )
    }
}

export default WinningScreen