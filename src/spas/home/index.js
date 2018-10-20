import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import GithubKitty from './github.svg'
import './home.font'

class HomeSPA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWin: false,
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
    }

    handleClick() {
        if(this.state.counter === 9){
            this.setState(state => ({
                counter: 0,
                isWin: true
            }));
        } else{
            this.setState(state => ({
                counter: state.counter + 1
            }));
        }
    }

    handleContinue() {
        this.setState(state => ({
            isWin: false
        }));
    }

    // Could separate to own component
    createCounterDisplay() {
        var icons = [];
            for (var i = 0; i < this.state.counter; i++) {
                icons.push(
                    <span className="icon icon-beer" key={i}></span>
                );
            }
        return icons;
    }

    render(){
        const isWin = this.state.isWin;
        let display;

        const gameArena = (
            <div>
                <div className="score">
                    Score: {this.createCounterDisplay()}
                </div>
                <div className="bounce-container">
                    <div className="animation-plane">
                        <GithubKitty className="kitty" onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )

        const winningBanner = (
            <div className="win-container">
                <p>YOU WIN! 👏</p>
                <div className="button" onClick={this.handleContinue}>Play Again!</div>
            </div>
        )

        if (isWin) {
            display = winningBanner
        } else {
            display = gameArena
        }

        return (
            <div className="game-container">
                <div className="header">
                    <p>🦄 Hello kitty! 🦄</p>
                </div>
                {display}
            </div>
        )
    }
}


export default HomeSPA;