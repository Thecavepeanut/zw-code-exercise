// @flow

import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

// Styles
import { AppContainer } from '../styles/containers/';
import { GameIcon } from '../styles/game';

// Types
import type { Dispatch } from '../../utils/types/actions';
import type { State } from '../../utils/types/states';

// Helpers
import { getDocumentWidth, getRandomAnimation } from '../../utils/helpers';

// Actions
import {
  addPoint,
  initApplication,
  setDeviceType,
  setRandomAnimation,
  toggleIntro,
} from '../../utils/actions';

// Components
import Intro from '../components/intro';

// images
const GamePieceImage = require('../home/ne.svg');

type StateProps = {
  pageWidth: number,
  showIntro: boolean,
  animation: null | string,
}

type DispatchProps = {
  onAddPoint: (team: string) => void,
  onInitApp: () => void,
  onSetDeviceType: (screenSize: number) => void,
  onSetRandomAnimation: (top: number, left: number) => void,
  onToggleIntro: (toggle?: boolean) => void,
}

type ApplicationProps = StateProps & DispatchProps;

let hasMount = 0;

class App extends React.Component<ApplicationProps> {
  windowResizeListener = () => {
    if (document.body &&
      getDocumentWidth(document) !== this.props.pageWidth) {
      this.forceUpdate();
    }
  };

  // Pass the max in order to get random number between 0 and [max]
  getRandomNumber = (max: number = Infinity) => Math.floor(Math.random() * max) + 1;

  loopAnimation = () => {
    const animateDelay = this.getRandomNumber(1) * 1000;
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
      this.loopAnimation();
    }, animateDelay);
  }

  componentDidMount() {
    console.log(['App mount count', hasMount++]);
    const {
      onInitApp,
      onSetDeviceType,
      onSetRandomAnimation,
    } = this.props;
    onInitApp();
    const screenSize = getDocumentWidth(document);
    onSetDeviceType(screenSize);
    onSetRandomAnimation(0, 0);
    this.loopAnimation();

    // Add window listener for window width and mobile check
    window.addEventListener('resize', debounce(this.windowResizeListener, 300));
  }
  componentWillUnmount() {
    // Remove event listener to prevent multi trigger
    window.removeEventListener('resize', this.windowResizeListener);
  }

  UNSAFE_componentWillUpdate() {
    // Check the windwo size on component update
    const documentWidth = getDocumentWidth(document);
    if (documentWidth !== this.props.pageWidth) {
      this.props.onSetDeviceType(documentWidth);
    }
  }

  render() {
    const {
      animation, onAddPoint, onToggleIntro, showIntro,
    } = this.props;
    const setanimation = animation || '';

    return (
      <AppContainer>
        {showIntro && <Intro
          onToggleIntro={onToggleIntro}
        />}
        <GameIcon id='gameIcon'
          className={`${setanimation} svg`}
          top={this.getRandomNumber()}
          left={this.getRandomNumber()}
          onClick={() => onAddPoint('home')}
        >
          <img src={GamePieceImage} alt='Game piece' />
        </GameIcon>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  pageWidth: state.system.pageWidth,
  showIntro: state.gameboard.intro,
  animation: state.gameboard.animation,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onAddPoint: (team: string) => dispatch(addPoint(team)),
  onInitApp: () => dispatch(initApplication()),
  onSetDeviceType: (screenSize: number) => dispatch(setDeviceType(screenSize)),
  onToggleIntro: (toggle?: boolean) => dispatch(toggleIntro(toggle)),
  onSetRandomAnimation: () => dispatch(setRandomAnimation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
