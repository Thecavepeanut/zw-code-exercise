import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
const { Provider } = Context;

class StateManager extends Component {
  static propTypes = {
      children: PropTypes.node
  };

  static defaultProps = {
      children: null
  };

  state = {
      score: 1,
      hasWon: false
  };

  render() {
      return (
          <Provider
              value={{
                  state: this.state,
                  actions: {
                      incrementScore: () => {
                          this.setState(prevState => ({
                              score: prevState.score + 1,
                              hasWon: prevState.score + 1 > 3
                          }));
                      }
                  }
              }}
          >
              {this.props.children}
          </Provider>
      );
  }
}

export { StateManager, Context };
