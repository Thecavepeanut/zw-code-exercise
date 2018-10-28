// @flow

import React, { Fragment } from 'react';

// Styles
import { IntroContainer, LevelSelection } from '../styles/components/intro';
import { NoClickContainer } from '../styles/app';

type DispatchProps = {
  onToggleIntro: (toggle?: boolean) => void,
  onSelectLevel: (level: string) => void,
}
type Props = DispatchProps;

const IntroBoard = ({ onSelectLevel, onToggleIntro }: Props) => (
  <Fragment>
    <NoClickContainer />
    <IntroContainer>
      <h2>Welcome to the {'"click"'}</h2>
      <p>Objective: Score more points than your opponent</p>
      <p>First to 10 points wins!</p>
      <p>Good luck!</p>
      <LevelSelection>
        <button className='asText' onClick={() => { onSelectLevel('beginner'); onToggleIntro(); }}>Beginner</button>
        <button className='asText' onClick={() => { onSelectLevel('intermediate'); onToggleIntro(); }}>Intermediate</button>
        <button className='asText' onClick={() => { onSelectLevel('advanced'); onToggleIntro(); }}>Advanced</button>
      </LevelSelection>
    </IntroContainer>
  </Fragment>
);

export default IntroBoard;
