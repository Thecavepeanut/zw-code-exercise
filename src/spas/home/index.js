import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import GithubKitty from './github.svg'
import './home.font'

class HomeSPA extends Component {
  state = {
    score: 0,
    gameActive: false,
    iconPosition: {}
  }

  componentWillUpdate(nextProps, { gameActive, score }) {
    // Tapping into subsequent re-renders following initial mount to trigger interval
    // Calls only when new game is initialized
    if (this.state.gameActive !== gameActive && score === 0) {
      this.triggerInterval();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleSVGInteraction = () => {
    const { score, gameActive } = this.state;
    if (gameActive) {
      // Avoid mutating state by using +=
      let nextState = { score: score + 1 };
      if (score === 9) {
        nextState = { ...nextState, gameActive: false };
        clearInterval(this.state.intervalId);
      }
      this.setState({ ...nextState }, this.buildGithubKittyPositioning);
    }
  };

  triggerInterval = () => {
    const intervalId = setInterval(this.buildGithubKittyPositioning, 2000);
    this.setState({ intervalId });
  }

  initializeGameHandler = () => this.setState({ score: 0, gameActive: true });

  renderGameMessage = () => {
    const { score } = this.state;
    let title = score === 0 ? 'Ready to play?' : 'Congrats! You won!';
    let buttonText = score === 0 ? 'START' : 'RESTART';
    return (
      <section className="game-message">
        <p>{title}</p>
        <button onClick={this.initializeGameHandler}>{buttonText}</button>
      </section>
    )
  };

  buildGithubKittyPositioning = () => {
    const randomValue = () => Math.floor(Math.random() * 100);
    let top = `${randomValue()}%`;
    let left = `${randomValue()}%`;
    this.setState({ iconPosition: { top, left } });
  };

  render() {
    const { score, iconPosition, gameActive } = this.state;
    return (
      <div className="home-spa">
        <section className="scoreboard">
          <p className="instructions">Click on the moving GitHub Kitty icon to score points. 10 points wins the game!</p>
          <p className="score-count">Your Score: {score} <span className="icon icon-beer" /></p>
        </section>
        <section className={`game-board${gameActive ? ' game-active' : ''}`}>
          <GithubKitty style={iconPosition}
            className="github-icon"
            onClick={this.handleSVGInteraction} />
          {!gameActive && this.renderGameMessage()}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<HomeSPA />, document.querySelector('.react-app'))