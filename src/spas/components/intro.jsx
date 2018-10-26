// @flow

import React, { Fragment } from 'react';

// Styles
import { IntroContainer } from '../styles/components/intro';
import { NoClickContainer } from '../styles/app';

type DispatchProps = {
  onToggleIntro: (toggle?: boolean) => void,
}
type Props = DispatchProps;

const IntroBoard = ({ onToggleIntro }: Props) => (
  <Fragment>
    <NoClickContainer />
    <IntroContainer>
      <h2>Welcome to the {'"click"'}</h2>
      <p>Objective: Score more points than your opponent</p>
      <p>First to 10 points wins!</p>
      <p>Good luck!</p>
      <button onClick={() => onToggleIntro()} className='primary'>Get clicking</button>
    </IntroContainer>
  </Fragment>
);

export default IntroBoard;
