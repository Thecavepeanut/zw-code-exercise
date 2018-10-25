// @flow

import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

// Styles
import { AppContainer } from '../styles/containers/';
import { initApplication, setDeviceType } from '../../utils/actions';

// Types
import type { Dispatch } from '../../utils/types/actions';
import type { State } from '../../utils/types/states';

// Start empty
type StateProps = {
  pageWidth: number,
}

type DispatchProps = {
  onInitApp: () => void,
  onSetDeviceType: (screenSize: number) => void,
}

type ApplicationProps = StateProps & DispatchProps;

let hasMount = 0;

class App extends React.Component<ApplicationProps> {
  windowResizeListener = () => {
    if (document.body &&
      document.body.clientWidth !== this.props.pageWidth) {
      this.forceUpdate();
    }
  };
  componentDidMount() {
    console.log(['App mount count', hasMount++]);
    this.props.onInitApp();
    const screenSize = document.body ? document.body.clientWidth : 0;
    this.props.onSetDeviceType(screenSize);

    // Add window listener for window width and mobile check
    window.addEventListener('resize', debounce(this.windowResizeListener, 300));
  }
  componentWillUnmount() {
    // Remove event listener to prevent multi trigger
    window.removeEventListener('resize', this.windowResizeListener);
  }

  UNSAFE_componentWillUpdate() {
    // Check the windwo size on component update
    const documentWidth = document.body ? document.body.clientWidth : 0;
    if (documentWidth !== this.props.pageWidth) {
      this.props.onSetDeviceType(documentWidth);
    }
  }

  render() {
    return (
      <AppContainer>
        <h1>Hello Worlds!</h1>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  pageWidth: state.system.pageWidth,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onInitApp: () => dispatch(initApplication()),
  onSetDeviceType: (screenSize: number) => dispatch(setDeviceType(screenSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
