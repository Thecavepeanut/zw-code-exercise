// @flow

import React from 'react';
import { connect } from 'react-redux';

// Components
import GameOverContainer from '../components/game-over';

// Actions
import { closePanel } from '../shared/actions';

// Types
import type { Dispatch } from '../shared/types/actions';
import type { State, GameOver as GameOverState } from '../shared/types/states';

type DispatchProps = {
  onClosePanel: () => void,
};

type StateProps = {
  gameOver: GameOverState,
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
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onClosePanel: () => dispatch(closePanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
