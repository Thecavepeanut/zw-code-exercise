import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GithubKitty from '../github.svg';

class Target extends Component {
  static propTypes = {
      onClick: PropTypes.func
  };

  static defaultProps = {
      onClick: () => {}
  };

  targetClicked = () => {
      this.props.onClick();
  };

  render() {
      return (
          <div className="svg-move">
              <GithubKitty className="svg-spin svg-target" onClick={this.targetClicked} />
          </div>
      );
  }
}

export default Target;
