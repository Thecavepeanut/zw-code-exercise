import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Square from './icons/square.svg'
import ProgressBar from './progressBar'
import SquareGenerator from './squareGenerator'

class HomeSPA extends Component {
    constructor(){
        super()
        this.state = { score: 0 }
        this.onClick = this.onClick.bind(this);
    }

    onClick(correctSquare){
        if(correctSquare){
            this.setState({ score: this.state.score + 1 })
        } else {
            // game is a little challenging when points are lost on incorrect guesses,
            // so disabling to make game easier for easy playing and testing
            // this.setState({ score: this.state.score - .25 })
            return
        }
    }

    gameOver(){
       return <h1 className='game-title game-over'>WINNER!!!</h1>
    }

    game(){
        const red = Math.floor((Math.random() * 255));
        const green = Math.floor((Math.random() * 255));
        const blue = Math.floor((Math.random() * 255));

        return (
            <div className='game-board'>
                <Square style={{ fill: `rgb(${red},${green},${blue})`}} className={this.state.score === 9 ? 'final target' : 'target'}/>
                <SquareGenerator red={red} blue={blue} green={green} onClick={this.onClick} score={this.state.score} />
            </div>
        )
    }

    render(){
        return (
            <div className='app'>
                <h1 className='game-title'>Color Match</h1>
                <ProgressBar percentage={this.state.score * 10} />
                {this.state.score > 9  ? this.gameOver() : this.game()}
            </div>
        )
    }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))
