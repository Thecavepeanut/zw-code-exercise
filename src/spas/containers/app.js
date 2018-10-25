// @flow

import React from 'react';
import { connect } from 'react-redux';

// Styles
import { AppContainer } from '../styles/containers/';
import { initApplication } from '../../utils/actions';

// Start empty
type ApplicationProps = {
  onInitApp: () => void,
};

class App extends React.Component<ApplicationProps> {
  componentDidMount() {
    this.props.onInitApp();
  }
  render() {
    return (
      <AppContainer>
        <h1>Hello Worlds!</h1>
      </AppContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onInitApp: () => dispatch(initApplication()),
});

export default connect(null, mapDispatchToProps)(App);
