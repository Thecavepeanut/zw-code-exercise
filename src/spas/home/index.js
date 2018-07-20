import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GithubKitty from './github.svg'
import Container from './container';
import Toolbar from './toolbar';
import NewGame from './new-game';
import GameOver from './game-over';
import GameWon from './game-won';
import './styles.scss'
import './home.font'
const maxMisses = 5;
const maxPoints = 10;
class HomeSPA extends Component {
    constructor(){
        super();
        this.state = {
            height: 0,
            width: 0,
            misses: 0,
            points: 0,
            gameOver: false,
            gameWon: false,
            gameRunning: false,
            newGame: true,
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.setDimensions.bind(this));
        this.setDimensions();
    }

    setDimensions(){
        const {
            offsetHeight,
            offsetWidth
        } = this.gameContainer;
        this.setState({
            height: offsetHeight,
            width: offsetWidth,
        })
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.setDimensions.bind(this));
    }

    hit(){
        const points = this.state.points + 1;
        this.setState({
            points,
        })
        this.checkEndGame(this.state.misses, points);
    }

    missed (){
        const misses = this.state.misses + 1;
        this.setState({
            misses,
        })

        this.checkEndGame(misses, this.state.points);
    }

    checkEndGame(misses, points){
        if(misses === maxMisses){
            this.setState({
                gameOver: true,
                gameRunning: false,
            });
        }

        if(points === maxPoints){
            this.setState({
                gameWon: true,
                gameRunning: false,
            });
        }
            
    }

    startNewGame() {
        this.setState({
            gameOver: false,
            gameRunning: true,
            newGame: false,
            gameWon: false,
            points: 0,
            misses: 0,
        })
    }

    render(){
        const {
            misses,
            points,
            gameRunning,
            newGame,
            gameOver,
            gameWon,
            height,
            width,
        } = this.state;
        return (
            <div className="main" >
                <Toolbar 
                    maxPoints={maxPoints}
                    maxMisses={maxMisses}
                    misses={misses}
                    points={points} />
                <div
                    onClick={this.missed.bind(this)} 
                    className="gameContainer" 
                    ref={c => { this.gameContainer = c}} 
                    >
                    {gameRunning && <Container height={height}
                               className='svgContainer'
                               clicked={this.hit.bind(this)}
                               width={width} >
                        <GithubKitty />
                    </Container>}
                </div>
               {!gameRunning && <div className="overlay" >
                    {newGame && <NewGame clicked={this.startNewGame.bind(this)} />}
                    {gameOver && <GameOver clicked={this.startNewGame.bind(this)} />}
                    {gameWon && <GameWon clicked={this.startNewGame.bind(this)} />  }
                    <div className="overlayBackground" />
                    
                </div>}
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('root'));