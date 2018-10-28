// @flow
// This is the stateless component used to show the game end options
// elements are recieved from the container/game-over

import React, { Fragment } from 'react';

import type { Props } from '../containers/game-over';

// Styles
import { NoClickContainer } from '../styles/app';
import { GameOverMessage, Score, SubTitle, Title } from '../styles/components/game-over';

const GameOverContainer = ({ gameOver, isWinner, onStartOver }: Props) => (
  <Fragment>
    <NoClickContainer zIndex={20} />
    <GameOverMessage className={isWinner ? 'chicken-dinner' : 'crying-lost'}>
      <Title>{gameOver.message}</Title>
      <SubTitle>Final Score</SubTitle>
      <div>
        <div>
          <p>Winner</p>
          <Score>{gameOver.winner}</Score>
        </div>
        <div>
          <p>Loser</p>
          <Score>{gameOver.loser}</Score>
        </div>
      </div>
      <button onClick={() => onStartOver()} className='primary'>Play again</button> <button onClick={() => onStartOver(true)} className='secondary'>Reset</button>
    </GameOverMessage>
  </Fragment>
);

export default GameOverContainer;
