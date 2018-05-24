import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import GithubKitty from './github.svg'
import './home.font'

// some constants
const scoreToAdvance = 10; // number of hits required to advance to next level
const levelLength = 60; // max time to complete each level in seconds
const targetWidth = 100;
const targetHeight = 100;

class HomeSPA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numHits: 0,
            secondsRemaining: levelLength,
            level: 1,
            targetX: 100,
            targetY: 100,
            targetRotation: 0,
            targetRotationRate: 2,
            targetDx: 1,
            targetDy: 1,
            targetDr: 2,
            targetScale: 1,
            curTargetScale: 1,
            animationRate: 10,
            arenaBoundary: {left: 0, top: 50, right: window.innerWidth, bottom: window.innerHeight},
            inPlay: false,
            showIntro: true,
            levelComplete: false,
            gameOver: false,
        };
        
        this.handleResize = this.handleResize.bind(this);
        this.startGame = this.startGame.bind(this);
        this.startNextLevel = this.startNextLevel.bind(this);
        this.handleCountdown = this.handleCountdown.bind(this);
        this.updateAnimation = this.updateAnimation.bind(this);
        this.handleTargetClick = this.handleTargetClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    // called when the browser is resized or when we jsut need to re-center the target
    handleResize() {
        const arenaBoundary = {left: 0, top: 40, right: window.innerWidth, bottom: window.innerHeight};
        this.setState({ 
            arenaBoundary,
            targetX: (arenaBoundary.right + arenaBoundary.left - targetWidth) / 2,
            targetY: (arenaBoundary.bottom + arenaBoundary.top - targetHeight) / 2,
            targetRotation: 0,
            curTargetScale: this.state.targetScale,
        });
    }
    
    // starts or restarts the game
    startGame() {
        window.clearTimeout(this.countdownTimer);
        window.clearTimeout(this.animationTimer);
        window.clearTimeout(this.clickTimer);

        const arenaBoundary = {left: 0, top: 40, right: window.innerWidth, bottom: window.innerHeight};
        
        this.setState({
            numHits: 0,
            secondsRemaining: levelLength,
            level: 1,
            targetX: (arenaBoundary.right + arenaBoundary.left - targetWidth) / 2,
            targetY: (arenaBoundary.bottom + arenaBoundary.top - targetHeight) / 2,
            targetDx: 2 + Math.random() * (Math.random < 0.5 ? 1 : -1),
            targetDy: 2 + Math.random() * (Math.random < 0.5 ? 1 : -1),
            targetDr: 2,
            targetScale: 1,
            curTargetScale: 1,
            inPlay: true,
            showIntro: false,
            gameOver: false,          
        });

        this.countdownTimer = window.setTimeout(this.handleCountdown, 1000);
        this.animationTimer = window.setTimeout(this.updateAnimation, this.state.animationRate);
    }

    // starts the next level after a level has been completed
    startNextLevel() {
        this.handleResize();
        this.setState({
            level: this.state.level + 1,
            secondsRemaining: levelLength,
            numHits: 0,
            targetScale: this.state.targetScale * 0.9,
            targetDx: this.state.targetDx * 1.1,
            targetDy: this.state.targetDy * 1.1,
            targetDr: this.state.targetDr * 1.1,
            levelComplete: false,
            inPlay: true,
        });

        window.clearTimeout(this.countdownTimer);
        window.clearTimeout(this.animationTimer);
        window.clearTimeout(this.clickTimer);
        this.countdownTimer = window.setTimeout(this.handleCountdown, 1000);
        this.animationTimer = window.setTimeout(this.updateAnimation, this.state.animationRate);
    }
    
    // handles counting down the number of seconds in the level and ends the game if the time expires
    handleCountdown() {
        let inPlay = true;
        let gameOver = false;
        if (this.state.secondsRemaining > 1) {
            this.countdownTimer = window.setTimeout(this.handleCountdown, 1000);
        } else {
            inPlay = false;
            gameOver = true;
            window.clearTimeout(this.countdownTimer);
            window.clearTimeout(this.animationTimer);
            window.clearTimeout(this.clickTimer);
        }
        this.setState(
            { secondsRemaining: this.state.secondsRemaining - 1, inPlay, gameOver },
        );
    }
    
    // main animation timer handler
    updateAnimation() {
        if (this.state.inPlay) {
            let targetRotation = this.state.targetRotation;
            let targetX = this.state.targetX;
            let targetY = this.state.targetY;
            let targetDx = this.state.targetDx;
            let targetDy = this.state.targetDy;
            let targetDr = this.state.targetDr;
            let arenaBoundary = this.state.arenaBoundary;
            let curTargetScale = this.state.curTargetScale;
    
            
            const scaleDiffX = (targetWidth - (targetWidth * curTargetScale)) / 2;
            const scaleDiffY = (targetHeight - (targetHeight * curTargetScale)) / 2;
    
            // occasionally randomly reverse direction
            if (Math.random() < 0.005) {
                targetDx = -targetDx;
                targetDy = -targetDy;
                targetDr = -targetDr;
            } else {
                // see if we hit an edge
                if (targetX + targetWidth - scaleDiffX + targetDx > arenaBoundary.right || targetX + scaleDiffX + targetDx < arenaBoundary.left) {
                    targetDx = -targetDx;
                    targetDr = -targetDr;
                }
                if (targetY + targetHeight - scaleDiffY + targetDy > arenaBoundary.bottom || targetY + scaleDiffY + targetDy < arenaBoundary.top) {
                    targetDy = -targetDy;
                    targetDr = -targetDr;
                }
            }           
            
            // see if we need to be shrinking the target back to normal size after a click
            if (curTargetScale > this.state.targetScale) {
                const diff = .05 * this.state.targetScale;
                curTargetScale = curTargetScale - diff >= this.state.targetScale ? curTargetScale - diff : this.state.targetScale;
            }
            // update rotation and location
            targetRotation = (targetRotation + targetDr) % 360;
            targetX += targetDx;
            targetY += targetDy;
            
            // update state
            this.setState(
                {
                    targetRotation,
                    targetX,
                    targetY,
                    targetDx,
                    targetDy,
                    targetDr,
                    curTargetScale,
                },
                () => this.animationTimer = window.setTimeout(this.updateAnimation, this.state.animationRate)
            );
        }
    }
    
    // handles the user clicking on the target successfully -- increments the hits and ends the level if completed
    handleTargetClick(event) {
        if(this.state.inPlay) {
            this.setState(
                { numHits: this.state.numHits + 1, curTargetScale: this.state.targetScale * 1.5 },
                () => {
                    if (this.state.numHits === scoreToAdvance) {
                        window.clearTimeout(this.countdownTimer);
                        window.clearTimeout(this.animationTimer);
                        window.clearTimeout(this.clickTimer);
                        this.setState({
                            levelComplete: true,
                            inPlay: false,
                        });
                    }
                }
            );
        }
    }
    
    render() {
        const beers = [];
        for(let i = 0; i < this.state.numHits; i++) {
            beers.push(<span key={i} className="icon icon-beer" />);
        }
        
        const targetStyle = {
            position: 'absolute', 
            left: `${this.state.targetX}px`, top: `${this.state.targetY}px`,
            transform: `rotate(${this.state.targetRotation}deg) scale(${this.state.curTargetScale})`,
            fill: this.state.curTargetScale !== this.state.targetScale ? 'red' : 'black',
        };
                
        return (
            <div className="game">
                <div className="header">
                    <div>
                        <div className='level'>Round {this.state.level}</div>
                        <div className='hit-count'>{beers}</div>
                        <div className='timer'>{this.state.secondsRemaining} seconds</div>
                     </div>
                </div>
                {!this.state.showIntro && <GithubKitty onMouseDown={this.handleTargetClick} style={targetStyle} />}

                {this.state.showIntro &&
                    <div className="modal-container">
                        <div className="modal">
                            <h1>Punch the GitHub Kitty!</h1>
                            <GithubKitty />
                            <div>In each round you have 60 seconds to click on the GitHub Kitty 10 times.</div>
                            <div>How hard could that be?</div>
                            <div>Good luck!</div>
                            <button onClick={this.startGame}>Start</button>
                        </div>
                    </div>
                }

                {this.state.levelComplete &&
                    <div className="modal-container">
                        <div className="modal">
                            <h1>You won round {this.state.level}!!!</h1>
                            <GithubKitty />
                            <div>Let's see how you do in round {this.state.level + 1}...</div>
                            <button onClick={this.startNextLevel}>Go!</button>
                        </div>
                    </div>
                }
                
                {this.state.gameOver &&
                    <div className="modal-container">
                        <div className="modal">
                            <h1>Game Over!</h1>
                            <GithubKitty />
                            <div>
                                {this.state.level >= 5 && this.state.level < 7 && 'Pretty good! '}
                                {this.state.level >= 7 && this.state.level < 10 && 'All right! '}
                                {this.state.level >= 10 && 'Amazing! '}
                                You made it to round {this.state.level}.
                            </div>
                            <button onClick={this.startGame}>Play Again</button>
                        </div>
                    </div>
                }

            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'));
