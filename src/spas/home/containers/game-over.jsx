// @flow

import React from 'react';
import { connect } from 'react-redux';

// Components
import GameOverContainer from '../components/game-over';

// Actions
import { closePanel, startOver } from '../shared/actions';

// Types
import type { Dispatch } from '../shared/types/actions';
import type { State, GameOver as GameOverState } from '../shared/types/states';

type DispatchProps = {
  onClosePanel: () => void,
  onStartOver: () => void,
};

type StateProps = {
  gameOver: GameOverState,
  isWinner: boolean,
};

export type Props = DispatchProps & StateProps;

class GameOver extends React.Component<Props> {
  render() {
    return (
      <GameOverContainer
        { ...this.props }
      />
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  gameOver: state.gameboard.gameOver,
  isWinner: Boolean(state.gameboard.score.home === 10),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onClosePanel: () => dispatch(closePanel()),
  onStartOver: () => dispatch(startOver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
