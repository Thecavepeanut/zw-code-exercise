import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './home.font';

import Start from './start';
import MainGame from './main-game';
import Win from './win';
import Lose from './lose';

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
            gameState: GameState.START_MENU,
            successCount: 0,
        }

        this.loadSound();

        // Bind context
        this.startGame = this.startGame.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
        this.decreaseScore = this.decreaseScore.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    // Main game state controller. Load components when state changes.
    setGameScreen(state) {
        switch(state) {
            case GameState.START_MENU:
                return <Start startGame = {this.startGame}/>;
            case GameState.IN_GAME:
                return <MainGame increaseScore = {this.increaseScore} decreaseScore = {this.decreaseScore}/>;
            case GameState.WINNER:
                return <Win resetGame = {this.resetGame}/>;
            case GameState.GAME_OVER:
                return <Lose resetGame = {this.resetGame}/>;
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

    loseGame() {
        this.setState({
            gameState: GameState.GAME_OVER
        })
        this.stopAudio();
    }

    resetGame() {
        this.setState({
            gameState: GameState.START_MENU
        })
    }

    increaseScore() {
        const newScore = this.state.successCount + 1;

        if (newScore < 10) {
            this.setState({
                successCount: newScore
            })
        } else {
            this.winGame();
        }
    }

    decreaseScore() {
        const newScore = this.state.successCount - 1;

        if (newScore < 0) {
            this.loseGame();
        } else {
            this.setState({
                successCount: newScore
            })
        }
    }

    // ========== AUDIO ========= //

    playAudio() {
        this.audio.play();
    }

    stopAudio() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    /*
        Note: I was planning to use the HTML5 Audio API spectrum analyzer to detect the song bpm 
        and highs to sync events to. The setTimeout and setInterval aren't super accurate due to
        rounding errors, which causes the song to slowly get out of sync. Didn't get around to 
        doing this, but was still pretty cool.
    */
    loadSound() {
        let AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioContext = new AudioContext();
        this.audio = document.createElement('audio');
        this.audio.src = './dubstep.mp3';
        let audioSrc = audioContext.createMediaElementSource(this.audio);
        var analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        let frequencyData = new Uint8Array(analyser.frequencyBinCount);

        this.audio.addEventListener('canplay', function(){
            audioSrc.connect(analyser);
            audioSrc.connect(audioContext.destination);
        });
    }

    render(){
        return (
            <div className="main">
                {this.setGameScreen(this.state.gameState)}
            </div>
        )
    }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))