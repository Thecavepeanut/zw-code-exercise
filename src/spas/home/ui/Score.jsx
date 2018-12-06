import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerIcon from '../icons/beer.svg';

class Score extends Component {
  static propTypes = {
      score: PropTypes.number
  };

  static defaultProps = {
      score: 1
  };

  render() {
      const { score } = this.props;

      return (
          <section>
              <span>Score: </span>
              {// Would be better to use some sort of ID class or UUID instead of index for key
                  Array(score)
                      .fill(<div />)
                      .map((val, index) => (
                          <BeerIcon key={index} />
                      ))}
          </section>
      );
  }
}

export default Score;
