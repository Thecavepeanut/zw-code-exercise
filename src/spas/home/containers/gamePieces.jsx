// @flow
// Elements found in here relate to the elements within the page that the user can interact with
// The container here is setup to pass necessary actions and state atttributes into their respective component

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// Import Types
import type { Dispatch } from '../shared/types/actions';
import type { State } from '../shared/types/states';

// Containers
import GameOver from './game-over';
import ScoreBoard from './scoreboard';

// Helpers
import { getRandomAnimation, getRandomNumber } from '../shared/helpers';

// Actions
import {
  addPoint,
  setRandomAnimation,
  startOver,
} from '../shared/actions';

// Styles
import { GameIcon, Reload, VisitorContainer } from '../styles/game';

// images
const GamePieceImage = require('../ne.svg');

// Local Types
type StateProps = {
  animation: null | string,
  hasWinner: boolean,
  level: string,
};

type DispatchProps = {
  onAddPoint: (team: string) => void,
  onSetRandomAnimation: (top: number, left: number) => void,
  onStartGameOver: (reset?: boolean) => void,
};

type Props = StateProps & DispatchProps;

class GamePieces extends React.Component<Props> {
  loopAnimation = () => {
    let isDelay = 1.5;
    switch (this.props.level) {
      case 'advanced':
        isDelay = 0.25;
        break;
      case 'intermediate':
        isDelay = 1;
        break;
      default:
        break;
    }
    const animateDelay = getRandomNumber(isDelay) * 1000;
    const triggerDelay = setTimeout(() => {
      const GamePiece = document.getElementById('gameIcon');
      clearTimeout(triggerDelay);
      if (GamePiece) {
        let classes = GamePiece.className.replace(' stopAnimation', '');
        GamePiece.className = `${classes} stopAnimation`;
        classes = classes.split(' ');
        const top = GamePiece.offsetTop;
        const left = GamePiece.offsetLeft;
        classes[0] = this.props.hasWinner ? 'hasWinner' : getRandomAnimation(classes[0]);
        GamePiece.style.top = `${top}`;
        GamePiece.style.left = `${left}`;
        GamePiece.className = classes.join(' ');
      }
      this.loopAnimation();
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
      animation, hasWinner, level, onAddPoint, onStartGameOver,
    } = this.props;
    const setanimation = animation || '';
    return (
      <Fragment>
        {hasWinner && <GameOver />}
        <ScoreBoard />
        <VisitorContainer onClick={() => onAddPoint('visitors')}/>
        <GameIcon id='gameIcon'
          className={`${setanimation} ${level} svg`}
          top={getRandomNumber()}
          left={getRandomNumber()}
          onClick={() => onAddPoint('home')}
        >
          <img src={GamePieceImage} alt='Game piece' />
        </GameIcon>
        <Reload className='primary' onClick={() => onStartGameOver(true) }>Reset</Reload>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  animation: state.gameboard.animation,
  level: state.gameboard.level,
  pageWidth: state.system.pageWidth,
  showIntro: state.gameboard.intro,
  hasWinner: state.gameboard.hasWinner,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onAddPoint: (team: string) => dispatch(addPoint(team)),
  onSetRandomAnimation: () => dispatch(setRandomAnimation()),
  onStartGameOver: (reset?: boolean) => dispatch(startOver(reset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePieces);
