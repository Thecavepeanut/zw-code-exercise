// @flow

import React from 'react';
import { connect } from 'react-redux';

// Components
import Board from '../components/scoreboard';

// Types
import type { State, GameScore } from '../shared/types/states';

type StateProps = {
  score: GameScore,
}

export type Props = StateProps;

class ScoreBoard extends React.Component<Props> {
  render() {
    const { score } = this.props;
    return (
      <Board
        score={score}
      />
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  score: state.gameboard.score,
});

export default connect(mapStateToProps)(ScoreBoard);
