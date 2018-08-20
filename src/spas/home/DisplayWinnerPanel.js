import React, {Component} from 'react';
import './styles.scss';
import GithubKitty from './github.svg';
import './home.font';

class DisplayWinnerPanel extends Component {
  constructor(props) {
    super(props);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleResetClick() {
    this.props.onResetGame();
  }

  render() {
    return (
      <div className="display-winner-panel">
        <div className="winner-msg center">
          <h1>
            Winner!!!
            Winner!!!
            Winner!!!
          </h1>
          <div>
            <GithubKitty />
            <GithubKitty />
            <GithubKitty />
          </div>
          <h1>
            Please click Play Again to start another game.
          </h1>
          <button onClick={this.handleResetClick}>
            Play Again.
          </button>
        </div>
      </div>
    );
  }
}

export default DisplayWinnerPanel;
