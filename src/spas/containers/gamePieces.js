// @flow

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// Import Types
import type { Dispatch } from '../../utils/types/actions';
import type { State } from '../../utils/types/states';

// Components
import ScoreBoard from './scoreboard';

// Helpers
import { getRandomAnimation, getRandomNumber } from '../../utils/helpers';

// Actions
import {
  addPoint,
  setRandomAnimation,
} from '../../utils/actions';

// Styles
import { GameIcon, VisitorContainer } from '../styles/game';

// images
const GamePieceImage = require('../home/ne.svg');

// Local Types
type StateProps = {
  animation: null | string,
  isWinner: boolean,
  isLoser: boolean,
};

type DispatchProps = {
  onAddPoint: (team: string) => void,
  onSetRandomAnimation: (top: number, left: number) => void,
};

type Props = StateProps & DispatchProps;

class GamePieces extends React.Component<Props> {
  loopAnimation = () => {
    const animateDelay = getRandomNumber(1) * 1000;
    const triggerDelay = setTimeout(() => {
      const GamePiece = document.getElementById('gameIcon');
      clearTimeout(triggerDelay);
      if (GamePiece) {
        let classes = GamePiece.className.replace(' stopAnimation', '');
        GamePiece.className = `${classes} stopAnimation`;
        classes = classes.split(' ');
        delete classes[classes.length];
        const top = GamePiece.offsetTop;
        const left = GamePiece.offsetLeft;
        classes[0] = getRandomAnimation(classes[0]);
        GamePiece.className = classes.join(' ');
        GamePiece.style.top = `${top}`;
        GamePiece.style.left = `${left}`;
      }
      if (!this.props.isWinner) {
        this.loopAnimation();
      }
    }, animateDelay);
  };

  componentDidMount() {
    const {
      onSetRandomAnimation,
    } = this.props;

    onSetRandomAnimation(0, 0);
    this.loopAnimation();
  }

  render() {
    const {
      animation, onAddPoint,
    } = this.props;
    const setanimation = animation || '';
    return (
      <Fragment>
        <ScoreBoard />
        <VisitorContainer onClick={() => onAddPoint('visitors')}/>
        <GameIcon id='gameIcon'
          className={`${setanimation} svg`}
          top={getRandomNumber()}
          left={getRandomNumber()}
          onClick={() => onAddPoint('home')}
        >
          <img src={GamePieceImage} alt='Game piece' />
        </GameIcon>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  animation: state.gameboard.animation,
  pageWidth: state.system.pageWidth,
  showIntro: state.gameboard.intro,
  isWinner: (state.gameboard.score.home === 10),
  isLoser: (state.gameboard.score.visitors === 10),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onAddPoint: (team: string) => dispatch(addPoint(team)),
  onSetRandomAnimation: () => dispatch(setRandomAnimation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePieces);
