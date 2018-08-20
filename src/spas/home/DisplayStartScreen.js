import React, {Component} from 'react';
import './styles.scss';
import GithubKitty from './github.svg';
import './home.font';

class DisplayStartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Player1'};
    this.handleStartGameClick = this.handleStartGameClick.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    if (e.target.value) {
      this.setState({name: e.target.value});
    }
  }

  handleNameClick() {
    this.setState({name: ''});
  }

  handleStartGameClick(e) {
    let playerName = 'Player1';
    if (this.state.name) {
      playerName = this.state.name
    }
    const isStartGame = true;
    this.props.onStartGame({playerName, isStartGame});
  }

  render() {
    const name = this.state.name;
    return (
      <div className="display-start-screen center">
        <div className="start-welcome">
          <h1>
            Welcome to Click Kitty Game!!!
          </h1>
          <div>
            <GithubKitty />
            <GithubKitty />
            <GithubKitty />
          </div>
        </div>
        <div className="start-controls">
          <h2>
            Please enter your name and click Start Game.
          </h2>
          <div>
            <input type="text"
              onChange={this.handleNameChange}
              onClick={this.handleNameClick}
              value={name} />
            <button onClick={this.handleStartGameClick}>
              Start Game.
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayStartScreen;
