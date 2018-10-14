import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import GithubKitty from './github.svg';
import './home.font';
import Start from './start';
import MainGame from './main-game';
import Win from './win';

// Fake enum :(
export const GameState = {
    START_MENU: 'start-menu',
    GAME_OVER: 'game-over',
    WINNER: 'game-win',
    IN_GAME: 'in-game'
}

class HomeSPA extends Component {

    constructor() {
        super();

        // Init game state
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            },
            gameState: GameState.START_MENU,
            successCount: 0,
        }

        this.loadSound();

        // Ugg, I forgot about this...
        this.startGame = this.startGame.bind(this);
        this.updateScore = this.updateScore.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    // Update game area dimensions when window is resized
    handleResize(value, e){
        this.setState({
            screen : {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            }
        });
    }
    
    componentDidMount() {
        // Listen for resize event when component is loaded
        window.addEventListener('resize',  this.handleResize.bind(this, false));
    }

    componentWillUnmount() {
        // Unload resize listener when component is destroyed
        window.removeEventListener('resize', this.handleResize);
    }

    // Main game state controller
    setGameScreen(state) {
        switch(state) {
            case GameState.START_MENU:
                return <Start startGame = {this.startGame}/>;
            case GameState.IN_GAME:
                return <MainGame updateScore = {this.updateScore}/>;
            case GameState.WINNER:
                return <Win resetGame = {this.resetGame}/>;
        }
    }

    startGame() {
        this.setState({
            successCount: 0,
            gameState: GameState.IN_GAME
        })
        this.playAudio();
    }

    winGame() {
        this.setState({
            gameState: GameState.WINNER
        })
        this.stopAudio();
    }

    resetGame() {
        this.setState({
            gameState: GameState.START_MENU
        })
    }

    playAudio() {
        this.audio.play();
    }

    stopAudio() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    loadSound() {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext();
        this.audio = document.createElement('audio');
        this.audio.src = './dubstep.mp3';
        let audioSrc = audioContext.createMediaElementSource(this.audio);
        var analyser = audioContext.createAnalyser();

        this.audio.addEventListener('canplay', function(){
            audioSrc.connect(analyser);
            audioSrc.connect(audioContext.destination);
            //audio.play();
        });
        
        // var ctx = new AudioContext();
        // this.audio = document.createElement('audio');
        // this.audio.src = './dubstep.mp3';
        // var audioSrc = ctx.createMediaElementSource(this.audio);
        // var analyser = ctx.createAnalyser();
        // audioSrc.connect(analyser);
        // audioSrc.connect(ctx.destination);

        // var frequencyData = new Uint8Array(analyser.frequencyBinCount);

        // // loop to use the data
        // function renderFrame() {
        //     requestAnimationFrame(renderFrame);
        //     // update data in frequencyData
        //     analyser.getByteFrequencyData(frequencyData);
        //     // render frame based on values in frequencyData

        // }

        // this.audio.play();
        // renderFrame();
    }

    updateScore() {
        const newScore = this.state.successCount + 1;

        if (newScore < 10) {
            this.setState({
                successCount: newScore
            })
        } else {
            this.winGame();
        }

    }

    render(){
        return (
            <div className="main">
                {/* <span className="icon icon-beer"/>
                <GithubKitty /> */}
                {this.setGameScreen(this.state.gameState)}
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))