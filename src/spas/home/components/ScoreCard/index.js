import React, { Component } from 'react';
import '../../assets/home.font';
import './scorecard.scss';

const Tally = ({ classes }) => <span className={classes.join(' ')} />;

class ScoreCard extends Component {
  setScore(currentScore, size = currentScore) {
    let tally = [];
    for (let i = 0; i < size; i++) {
      tally.push(
        <Tally
          key={`tally-${i}`}
          classes={['icon', 'icon-beer', i < currentScore ? 'on' : '']}
        />
      );
    }

    return tally;
  }

  render() {
    const { score, toWin, children } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="name">{Object.keys(score)[0]}</div>
          <div className="name">{Object.keys(score)[1]}</div>
        </div>
        <div className="row">
          <div className="score">{this.setScore(score.Player, toWin)}</div>
          {children}
          <div className="score">{this.setScore(score.House)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ScoreCard;
