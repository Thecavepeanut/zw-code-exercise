import React, {Component} from 'react';
import Target from './target';

const BPMMillis = 413.8; // 145 BPM in milis
const Colors = ['rgb(255, 206, 0)', 'rgb(148, 255, 252)', 'rgb(246, 64, 193)', 'rgb(1, 234, 169)', 'rgb(158, 0, 178)']

class MainGame extends Component {

    constructor(props) {
        super(props);

        this.state = {
            beat: 1,                                                // Beat count to sync actions (game clock)
            score: 0,                                               // Store score
            showInstructions: true,                                 // Hide/show initial instructions
            kittyCount: 0,                                          // Number of kitty icons on page
            bpmMultiplier: 1,                                       // Speeds up or slows down game clock
            selectedColor: Colors[Math.floor(Math.random() * 5)]    // Color needed to match in game
        }

        this.stopLoop = false;  // Used to kill recursion after unmounted
        this.gameLoop = this.gameLoop.bind(this);
        this.clicked = this.clicked.bind(this);
        this.targetEl = React.createRef();
    }

    componentDidMount() {
        // Start Game Loop. Using set intervals to control interval time.
        setTimeout(this.gameLoop, BPMMillis * this.state.bpmMultiplier);
    }

    componentWillUnmount() {
        // Kill recursion
        this.stopLoop = true;
    }

    /*
        The Game Loop
        Each loop occurs on every beat of the BPM selected to match the music.
    */
    gameLoop() {
        // Show instructions for 11 beats then start
        if (this.state.showInstructions && this.state.beat === 11) {
            this.setState({
                beat: 1,
                showInstructions: false,
                kittyCount: 1,
                bpmMultiplier: 4,
            })
        }

        // Increase number of kitties as score increases
        if (this.state.score > 0 && this.state.kittyCount < this.state.score + 1) {
            this.setState({
                kittyCount: this.state.kittyCount + 1
            })
        }

        // Change background color every 8 beats
        if( this.state.beat % 8 === 0) { 
            this.changeBackgroundColor();
        }

        // Increase difficulty after scoring 3 points
        if( this.state.score === 3 ) {
            this.setState({
                bpmMultiplier: 2
            })
        }

        // Update beat
        this.setState({
            beat: this.state.beat + 1
        })

        // Recursively restart the loop
        if (!this.stopLoop) {
            setTimeout(this.gameLoop, BPMMillis * this.state.bpmMultiplier);
        }
    }

    clicked(color) {
        if (color === this.state.selectedColor) {
            this.props.increaseScore();

            this.setState({
                score: this.state.score + 1
            })
        } else {
            this.props.decreaseScore();

            this.setState({
                score: this.state.score - 1
            })
        }
    }

    changeBackgroundColor() {
        this.stage.style.backgroundColor = Colors[Math.floor(Math.random() * 5)];
    }

    showInstructions() {
        if (this.state.showInstructions) {
            return (
                <div className="main-game-screen__instructions" style={{background: this.state.selectedColor}}>
                    <div className="main-game-screen__text" >Click On This Color.</div>
                </div>
            )
        };
    }

    showPoints() {
        let pointsContainer = [];
        for(let i = 0; i < this.state.score; i++) {
            pointsContainer.push(
                ( <span  key={i + 'point'} className="points-container__icon icon icon-beer"/> )
            );
        };
        return (
            <div className="points-container">
                {pointsContainer}
            </div>
        );
    }

    render(){
        let kitties = [];
        for (let i = 0; i < this.state.kittyCount; i++) {
            kitties.push(
                ( <Target key={i} beat={this.state.beat} score={this.state.score} clicked={this.clicked} colors={Colors}/> )
            );
        }
        return (
            <div className="main-game-screen" ref={(stage) => this.stage = stage}>
                {this.showPoints()}
                {this.showInstructions()}
                {kitties}
            </div>
        );
    }
}

export default MainGame;