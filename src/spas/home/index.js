import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './home.font'
import GamePage from './components/GamePage'
import GameInactivePage from './components/GameInactivePage'

class HomeSPA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameIsReady: true,
            gameIsOn: false,
            gameLost: null
        };
        this.gameOver = this.gameOver.bind(this);
        this.startGame = this.startGame.bind(this);
    }
    
    gameOver(result){
        this.setState(() =>{
            return {
                gameIsReady: true,
                gameIsOn: false,
                gameLost: result
            };
        });
    }


    startGame(){
        this.setState(() =>{
            return {
                gameIsReady: false,
                gameIsOn: true
            };
        });
    }

    render() {
        if(this.state.gameIsReady){
            let displayText = null;
            if(this.state.gameLost === null){
                displayText = "Click the Cat 10 Times to Win!"
            }else if(this.state.gameLost === true){
                displayText = "Time Is Up! You Lost!"
            }else if(this.state.gameLost === false){
                displayText = "Nice Job! You Just Beat the Github Cat!"
            }

            return(
                <div className="component-wrapper">
                    <GameInactivePage onPlayNewGame={this.startGame} textMessage={displayText} onGameLost={this.state.gameLost} />    
                </div>
            );
        }
        if(this.state.gameIsOn){
            return(
                <div className="component-wrapper">
                    <GamePage onGameOver={this.gameOver}/>    
                </div>
            );
            
        }
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))