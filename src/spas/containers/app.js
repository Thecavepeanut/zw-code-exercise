// @flow

import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

// Styles
import { AppContainer } from '../styles/containers/';

// Import Types
import type { Dispatch } from '../../utils/types/actions';
import type { State } from '../../utils/types/states';

// Helpers
import { getDocumentWidth } from '../../utils/helpers';

// Actions
import {
  initApplication,
  setDeviceType,
  toggleIntro,
} from '../../utils/actions';

// Components
import Intro from '../components/intro';
import GamePieces from './gamePieces';

// Local Types
type StateProps = {
  pageWidth: number,
  showIntro: boolean,
}

type DispatchProps = {
  onInitApp: () => void,
  onSetDeviceType: (screenSize: number) => void,
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

  componentDidMount() {
    console.log(['App mount count', hasMount++]);
    const {
      onInitApp,
      onSetDeviceType,
    } = this.props;
    onInitApp();
    const screenSize = getDocumentWidth(document);
    onSetDeviceType(screenSize);

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
      onToggleIntro, showIntro,
    } = this.props;

    return (
      <AppContainer>
        {showIntro && <Intro
          onToggleIntro={onToggleIntro}
        />}
        <GamePieces />
      </AppContainer>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  animation: state.gameboard.animation,
  pageWidth: state.system.pageWidth,
  showIntro: state.gameboard.intro,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onInitApp: () => dispatch(initApplication()),
  onSetDeviceType: (screenSize: number) => dispatch(setDeviceType(screenSize)),
  onToggleIntro: (toggle?: boolean) => dispatch(toggleIntro(toggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
